---
slug: 'vambie-vrchat'
category: 'guide'
date: '2022-11-15'
title: 'Vambie - VRChat'
description: 'Get your Vambie working with VRChat'
published: true
---

VRChat requires you to upload custom avatars from within the Unity Editor. This guide was verified to work on Windows.

## Downloads

Install Unity version 2019.4.31 located here [https://unity3d.com/unity/whats-new/2019.4.31](https://unity3d.com/unity/whats-new/2019.4.31).

When installing this version of Unity there will be a prompt asking you to install components to Windows.

Please install the Windows and Android Target Support.

## Importing Your Avatar

Once installed open Unity and go to `File > Open Project` and locate the folder you downloaded from Taiyaki Studios called Unity Project and select open.

Once the project is done compiling you will have a scene with your Vambie in it. At the top of the Unity window is a VRChat SDK window.

Click the drop down and go to Show Control Panel. This will give you a new window where you will log into your VRChat Account. This will not work with a Steam or Meta account.

If you are using a Steam or Meta account then you will need to link your Steam or Meta account to a VRChat account using these instructions: [https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account](https://help.vrchat.com/hc/en-us/articles/360062659053-I-want-to-turn-my-Steam-Oculus-or-Viveport-account-into-a-VRChat-account).

Your VRChat account's trust level must be "New User" which typically requires about 12 hours of playtime. If you log in to your VRChat Account in Unity and are unable to upload an avatar, play around in VRChat with your VRChat account until you either receive an email or the status changes in Unity to reflect your trust level increasing to “New User”.

Once you are able to upload just select the Vambie in the Hierarchy window in Unity, select the VRChat SDK dropdown again and Show Control Panel.

You will log into your account again and go to the Builder tab within the VRChat SDK window.

On this Builder tab there will be a button called Switch Build Target to `_____`. The blank with either be Windows or Android. If you are a Steam player build to Windows. If you are an Meta Quest 2 player then build to Android.

Once that is done you should be able to select the button at the bottom of the VRChat SDK window called Build & Publish for `_____`. Again the blank is for your targeted platform of Windows (Steam) or Android (Meta Quest 2).

Once you have selected the build & publish button you will get a new window showing you a brief summary of what you need to do to upload.

Give your Vambie a name, description, any content warnings (if neccessary), how your will share it - whether it is private or public to other players in VRChat.

For Meta users a crossplatform fallback button will appear which you will check, and the user aggrement from the VRChat team. Once you fill and check all of that out hit the upload button and it will give you a success feedback. Jump into VRChat, select your character and have fun!
