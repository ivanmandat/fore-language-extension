# Как подключить BI-поиск для аналитических панелей в веб-приложении?

Как подключить BI-поиск для аналитических панелей в веб-приложении?
-


# Как подключить BI-поиск для аналитических панелей в веб-приложении?


При работе с аналитическими панелями доступны следующие виды [поиска
 источников данных](../Blocks/Gadgets/DataSource_Search.htm): поиск источника по его наименованию и BI-поиск
 источников по их содержимому.


Для использования BI-поиска должны быть произведены настройки, описанные
 в подразделе «[Установка
 сервиса BI-поиска](setup.chm::/BISearch/BISearch_Setup.htm)».
 Для выполнения BI-поиска в веб-приложении дополнительно необходимо доработать
 файл [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm):


	- Откройте для редактирования файл [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm).


	- В файл [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm)
	 в раздел <pp> добавьте
	 следующий код:


<modules>
    <dashboard>
        <ReportBox BISearchEnabled="true" />
    </dashboard>
</modules>


	- Сохраните изменения и закройте файл [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm).


	- Перезапустите BI-сервер и серверную часть веб-приложения.


## Пример файла PP.xml, содержащего настройки для подключения BI-поиска


<pp>
    <service url="http://localhost/FPBI_App_v10.x/axis2/services/PP.SOM.Som"/>
    <metabase id="FPRepository"/>
    <cultures>
        <culture cultureName="ru"/>
        <culture cultureName="en"/>
    </cultures>
    <Modules>
        <Dashboard>
            <ReportBox BISearchEnabled="true"/>
        </Dashboard>
    </Modules>
</pp>
См. также:


[Вопросы и ответы](FAQ.htm)
 | [Поиск источников данных](../Blocks/Gadgets/DataSource_Search.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
