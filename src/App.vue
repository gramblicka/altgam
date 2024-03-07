<script setup lang="ts">
import {OneTimePassword} from '@altgram/vue3-one-time-password'
import "@altgram/vue3-one-time-password/style.css"
</script>

<template>
	<div>

		<h4>Divided</h4>
		<OneTimePassword/>

		<h4>Group</h4>
		<OneTimePassword otp-mode="group">
			<p>Error message</p>
		</OneTimePassword>


		<!--		customActiveInputClass,-->
		<!--		customInputClass,-->
		<!--		customWrapperClass,-->
		<!--		reverseDirection-->
		<!--		borderRadius-->
		<!--		inputCount-->
		<!--		otpMode-->
		<!--		placeholder-->
		<!--		inputsGapWidth-->
		<!--		isDisabled-->
		<!--		isValid-->
		<!--		isAutoFocus-->
		<!--		inputType-->
		<!--		customWrapperValidClass,-->
		<!--		customWrapperErrorClass,-->
	</div>
</template>

<style scoped>

</style>
