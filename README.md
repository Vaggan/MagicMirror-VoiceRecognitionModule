# MagicMirror-VoiceRecognitionModule

## Introduction

This is a voicerecognition-module for the [MagicMirror](https://github.com/MichMich/MagicMirror) created by [MichMich´s](https://github.com/MichMich).

>In this version all settings are hardcoded and the voice commands are in swedish.

>I gladly accept suggestions for improvements.
 

## Configuration

No configurations yet.
Everything is hardcoded at the moment.

## Commands

* __Hej__									- Just a test that will alert a message.
* __Jag heter :name__						- Just a test that will alert a message including a parameter.
* __Stoppa (musiken) i :room__				- Stop the music in a zone.
* __Starta (musiken) i :room'__				- Start the music in a zone.
* __Höj (volymen) i :room__				- Increase the volume in a zone.
* __Sänk (volymen) i :room__				- Decrease the volume in a zone.
* __(Sätt) volymen i :room till :value__	- Set a specific volume in a zone.
* __Stoppa (all) musik__					- Stop the music in all zones.
* __Stoppa musiken__						- Stop the music in all zones.
* __Starta (all) musik__					- Start the music in all zones.
* __Starta musiken__						- Start the music in all zones.
* __Meddela :room (att)  \*message__			- Send a custom message to a zone (See annyang under requirement).
   

## Requirement

##### [node-sonos-http-api](https://github.com/jishi/node-sonos-http-api) by [jishi](https://github.com/jishi)

This API is required to run to be able to communicate with the sonos system.
Wihtout it we can not get the zones and we can not send ant commands.

##### [annyang](https://www.talater.com/annyang/)

This is a javascript library that is used to handle the voice commands.

To use the custom message youi need an API key from [VoiceRSS](http://www.voicerss.org/) 
>Experimental support for TTS. This REQUIRES a registered API key from voiceRSS! See [http://www.voicerss.org/](http://www.voicerss.org/) for info.
