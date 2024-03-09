<template>
	<form>

		<h4>Divided with handlers</h4>
		<OneTimePassword
				@completed="onCompleteHandler"
				@changed="onChangedHandler"
				@paste="onPasteHandler"
				ref="oneTimePassword"
		/>
		<button @click="resetOtp" style="margin-top: 10px;">Reset</button>

		<h4>Group & text</h4>
		<OneTimePassword otpMode="group" inputType="text"/>

		<h4>Divided error</h4>
		<OneTimePassword :isValid="false">
			<p class="wrapper-error-class">Error message</p>
		</OneTimePassword>

		<h4>Active input styling</h4>
		<OneTimePassword customActiveInputClass="custom-input-active" />

		<h4>Divided password input <br/> four digits without placeholder</h4>
		<OneTimePassword otpMode="divided" inputType="password" placeholder="" :inputCount="4" :hideCursor="true"/>

	</form>
</template>

<script setup lang="ts">
import OneTimePassword from '@altgr4m/vue3-one-time-password'
import "@altgr4m/vue3-one-time-password/style.css"
import {ref} from "vue";

const oneTimePassword = ref(null);
const resetOtp = () => {
	oneTimePassword.value.reset()
}
const onCompleteHandler = (tokenValue: string) => {
	console.log('onCompleteHandler');
	console.log(tokenValue);
}

const onChangedHandler = (tokenValue: string) => {
	console.log('onChangedHandler');
	console.log(tokenValue);
}

const onPasteHandler = (tokenValue: string) => {
	console.log('onPasteHandler');
	console.log(tokenValue);
}
</script>

<style>
.otp-app .wrapper-error-class {
	color: red;
	line-height: 1rem;
	font-size: 12px;
	text-align: left;
}
.otp-app .custom-input-active {
	text-align: center;
	border: 1px solid green;
}
</style>
