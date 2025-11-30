# Изменение времени ожидания до прерывания сессии

Изменение времени ожидания до прерывания сессии
-


# Изменение времени ожидания до прерывания сессии


Изменить время ожидания до прерывания сессии можно двумя способами:


	- в [настройках
	 системного реестра для BI-сервера](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm) установите необходимое
	 значение параметра TimeoutSec
	 в подразделе System/Session;


	- для поддержания соединения c BI-сервером с определенной периодичностью
	 вызывайте на html-странице метод [Metabase.getStatus](dhtmlMetabase.chm::/Classes/Metabase/Metabase/Metabase.getStatus.htm),
	 например:


setInterval(function () {metabase.getStatus()}, 1000);
См. также:


[Вопросы
 и ответы](../dhtml_FAQ.htm) | [Metabase.getStatus](dhtmlMetabase.chm::/Classes/Metabase/Metabase/Metabase.getStatus.htm)
 | [Настройки
 в системном реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
