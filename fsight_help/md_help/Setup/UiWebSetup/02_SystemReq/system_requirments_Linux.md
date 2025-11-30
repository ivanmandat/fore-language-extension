# Поддерживаемые версии ОС Linux

Поддерживаемые версии ОС Linux
-


# Поддерживаемые версии ОС Linux


[BI-сервер](../UiWebSetup_TitlePage.htm) может быть установлен
 на 64-х разрядный дистрибутив ОС Linux одной из следующих версий:


	- Debian-подобные дистрибутивы:


		- Astra Linux SE 1.7 (Воронеж, Орёл);


		- Astra Linux SE 1.8 (Воронеж, Орёл);


	- RedHat-подобные дистрибутивы:


		- РЕД ОС 7.3;


		- Rocky Linux 8;


	- ALT Linux 10.


Для корректной работы используйте актуальные библиотеки из системных
 репозиториев.


Примечание.
 Необходимые библиотеки содержатся в [дистрибутиве](../../02_AK_Install/DistributionKit.htm#linux)
 BI-сервера для ОС Linux и не требуют дополнительной установки. При установке
 недостающих библиотек отображается соответствующее сообщение.


[![](../../Opened.gif)![](../../Closed.gif)Список библиотек
 для Debian-подобных дистрибутивов](javascript:TextPopup(this))


	libc6, libstdc++6, libglib2.0-0, lsb-release, libx11-6, libgl1-mesa-glx,
	 libglu1-mesa, libgomp1, libxi6, libxrandr2, libxrender1, libxcursor1,
	 libxinerama1, fontconfig, fonts-liberation, xvfb, libldap-2.4-2, libqt5gui5,
	 libqt5opengl5, qt5-image-formats-plugins, libssl1.0.2, libtiff5, libjpeg62-turbo,
	 libopengl0, libqt5printsupport5, libatomic1, apache2.


	Примечание.
	 Библиотека libqt5printsupport5 требуется только для дистрибутивов,
	 в которых отсутствует графический интерфейс.


[![](../../Opened.gif)![](../../Closed.gif)Список библиотек
 для RedHat-подобных дистрибутивов](javascript:TextPopup(this))


	glibc, glib2, libgomp, libjpeg, libXi, libXrandr, libXrender, libXcursor,
	 libXinerama, fontconfig, findutils, bash, sed, openssl-libs >=
	 1, libglvnd-opengl, libstdc++, redhat-lsb-core, xorg-x11-server-Xvfb,
	 libpng, mesa-libGL, mesa-libGLU, openldap, liberation-sans-fonts,
	 qt5-qtbase, qt5-qtbase-gui, qt5-qtimageformats, httpd.


	Дополнительно:


		- для РЕД ОС: libatomic;


		- для Rocky Linux для Oracle: libsnl.


[![](../../Opened.gif)![](../../Closed.gif)Список библиотек
 для ALT Linux](javascript:TextPopup(this))


	glibc, glib2, libgomp, libjpeg, libXi, libXrandr, libXrender, libXcursor,
	 libXinerama, fontconfig, findutils, bash, sed, openssl-libs >=
	 1, libglvnd-opengl, libstdc++, redhat-lsb-core, xorg-x11-server-Xvfb,
	 libpng, mesa-libGL, mesa-libGLU, openldap, liberation-sans-fonts,
	 qt5-qtbase, qt5-qtbase-gui, qt5-qtimageformats, httpd, xorg-xvfb,
	 libpng15, qt5-imageformats, apache2-base, apache2-httpd-worker, libatomic1.


	Дополнительно для Oracle:


		- libnsl1.


Для работы BI-сервера используется виртуальный графический дисплей Xvfb,
 который не требует установки графического окружения, авторизации пользователя
 в ОС и доступа к его X-сессии.


Примечание.
 Работа BI-сервера в указанных версиях ОС Linux проверена и функционирует
 в соответствии с имеющимся [списком ограничений](../03_Setup_Web/Linux_constraints.htm).


См. также:


[Системные
 требования к серверу веб-приложения](../../03_DB_Server_Config/Setup_DB_ServerSysReq.htm#web) | [Системные
 требования к BI-серверу и серверу приложений](../../03_DB_Server_Config/Setup_DB_ServerSysReq.htm#bi) | [Поддержка
 работы в виртуальных средах](../../01_SysReq/virtualization_platform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
