<template>
  <div class="bg-black">
    <div class="md:container mx-auto px-8 py-[100px]">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-6">
        <div class="flex flex-wrap gap-4">
          <button
            class="border border-paper border-dashed py-[5px] px-[10px] rounded-[12px] flex flex-row items-center gap-1 text-[18px] text-gray-400"
          >
            <Icon
              :icon="'mingcute:headphone-fill'"
              width="20"
              height="20"
            />Number:+85585704481
          </button>
          <button
            class="border border-paper border-dashed py-[5px] px-[10px] rounded-[12px] flex flex-row items-center gap-1 text-[18px] text-gray-400"
          >
            <Icon
              :icon="'ic:baseline-email'"
              width="20"
              height="20"
            />Email:tphourac@gmail.com
          </button>
        </div>
        <!-- Email Field -->
        <div class="flex gap-6 sm:flex-row flex-col">
          <!-- First Email Field -->
          <div class="flex-1">
            <div class="relative flex flex-col gap-4">
              <Label class="text-[16px] font-medium text-gray-300">Name</Label>
              <input
                v-model="name"
                type="text"
                placeholder="Than Phourac"
                class="py-[19px] px-[20px] border border-paper rounded-[10px] bg-white font-[400] text-black focus:outline-none w-full"
              />
              <transition name="fade">
                <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                  {{ errors.name }}
                </p>
              </transition>
            </div>
          </div>

          <!-- Second Email Field -->
          <div class="flex-1">
            <div class="relative flex flex-col gap-4">
              <Label class="text-[16px] font-medium text-gray-300">Email</Label>
              <input
                v-model="email"
                type="email"
                placeholder="tphourac@gmail.com"
                class="py-[19px] px-[20px] border border-paper rounded-[10px] bg-white font-[400] text-black focus:outline-none w-full"
              />
              <transition name="fade">
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                  {{ errors.email }}
                </p>
              </transition>
            </div>
          </div>

          <div class="flex-1">
            <div class="relative flex flex-col gap-4">
              <Label class="text-[16px] font-medium text-gray-300">Phone</Label>
              <input
                v-model="phone"
                type="text"
                placeholder="012345678"
                class="py-[19px] px-[20px] border border-paper rounded-[10px] bg-white font-[400] text-black focus:outline-none w-full"
              />
            </div>
          </div>
        </div>

        <!-- Password Field -->

        <div class="flex-1">
          <div class="relative flex flex-col gap-4">
            <Label class="text-[16px] font-medium text-gray-300">Message</Label>
            <textarea
              v-model="message"
              rows="3"
              placeholder="Write your message here..."
              class="py-[19px] px-[20px] border border-paper rounded-[10px] bg-white font-[400] text-black focus:outline-none w-full"
            ></textarea>
            <!-- <transition name="fade">
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">
                {{ errors.message }}
              </p>
            </transition> -->
          </div>
        </div>

        <div>
          <button
            type="submit"
            v-motion
            :initial="{
              backgroundColor: '#c4f000',
              color: '#000000'
            }"
            :hovered="{
              backgroundColor: '#000000',
              border: '1px solid #c4f000',
              color: '#FAFAFA'
            }"
            class="rounded-3xl px-8 py-3 inline-flex items-center gap-2 transition-all duration-300 font-semibold"
          >
            Send Me Message
            <Icon
              :icon="'lets-icons:message-alt-fill'"
              width="28"
              height="28"
            />
          </button>
        </div>
      </form>
    </div>
  </div>

  <CusAlert
    v-model="showAlert"
    message="Your data has been submitted!"
    type="success"
    :duration="6000"
  />
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { Icon } from '@iconify/vue'
import * as yup from 'yup'
import CusAlert from './CusAlert.vue'

const showAlert = ref(false)

function triggerAlert() {
  showAlert.value = true
}

// 1. Define schema
const schema = yup.object({
  name: yup.string().required('Full name is required'),
  email: yup.string().required('Email is required').email('Email is invalid')
  // message: yup.string().required('Message is required')
})

// 2. Setup form
const { handleSubmit, errors } = useForm({ validationSchema: schema })

// 3. Match field names exactly
const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')
const { value: message } = useField<string>('message')
const { value: phone } = useField<string>('phone')

// 4. Submit handler
const onSubmit = handleSubmit(async (values) => {
  try {
    // Construct message
    const messageText = `
      📝 New Form Submission:
      👤 Name: ${values.name}
      📧 Email: ${values.email}
      💬 Message: ${values.message}
      📞 Phone: ${values.phone}
    `.trim()

    // Send message to Telegram
    const res = await fetch(
      `https://api.telegram.org/bot7795994378:AAFWvl-zqVRmxZgoXyczlcTNRW1TrHdbRYs/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: 670761636,
          text: messageText,
          parse_mode: 'HTML'
        })
      }
    )
    triggerAlert()

    const result = await res.json()

    if (!res.ok) {
      console.error('Telegram error:', result.description)
      throw new Error(result.description)
    }

    // alert('Message sent successfully ✅')
  } catch (err) {
    console.error('Failed to send message:', err)
    alert('Failed to send message ❌')
  }
})
</script>

<style scoped></style>
