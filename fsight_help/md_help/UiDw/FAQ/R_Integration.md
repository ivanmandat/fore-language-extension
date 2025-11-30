# Как настроить интеграцию с R?

Как настроить интеграцию с R?
-


# Как настроить интеграцию с R?


В инструменте анализа временных рядов доступна интеграция с пакетом
 R, расширяющим аналитические возможности инструмента.


Более подробная информация об R приведена в [документации
 к R](http://cran.r-project.org/manuals.html).


## Интеграция в настольном приложении


Для получения подробного описания процесса интеграции продукта «Форсайт. Аналитическая платформа»
 с пакетом R обратитесь к статье «[Подключение дополнительных модулей к «Форсайт. Аналитическая платформа](uinav.chm::/02_Navigator/CommonSettings/Integration.htm#r)».


## Интеграция в веб-приложении


	- Выполните все шаги по интеграции R в настольном приложении.


	- Откройте для редактирования файл [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm).


	- В файл [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm)
	 в раздел <pp> добавьте
	 следующий код:


<modules>
    <timeSeries>
        <ReportBox isRExist="true" />
    </timeSeries>
</modules>


	- Сохраните изменения и закройте файл [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm).


	- Перезапустите BI-сервер и серверную часть веб-приложения.


После данных действий [методы
 R](../Workbook/CalculatedSeries/r_metods.htm) доступны для использования в веб-приложении.


### Пример файла PP.xml, содержащего настройки для интеграции с R


<pp>
    <service url="http://localhost/FPBI_App_v10.x/axis2/services/PP.SOM.Som"/>
    <metabase id="FPRepository"/>
    <cultures>
        <culture cultureName="ru"/>
        <culture cultureName="en"/>
    </cultures>
    <Modules>
        <timeSeries>
            <ReportBox isRExist="true"/>
        </timeSeries>
    </Modules>
</pp>
См. также:


[Вопросы и ответы](FAQ.htm) | [Какие методы в «Форсайт. Аналитическая платформа»
 можно рассчитать с помощью R?](UiNav.chm::/FAQ/Use_of_R.htm) | [Использование
 R при расчете модели](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/R_Parms.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
