# Публикация в социальных сетях

Публикация в социальных сетях
-


# Публикация в социальных сетях


В веб-приложении доступна публикация ссылки на [экспресс-отчет](UiExpress.chm::/purpose/UiExpress_Purpose.htm),
 [регламентный
 отчет](UiReport.chm::/UiReport_purpose.htm), [аналитическую панель](UiAdhoc.chm::/UiAdhoc_Purpose.htm),
 [рабочую
 книгу](UiDw.chm::/UiDw_Title.htm) и [модель](UiModelling.chm::/1_Modelling/UiModelling_First.htm)
 в социальных сетях:


	- LiveJournal;


	- Google+.


Примечание.
 Публикация в Google+ доступна только в веб-приложении, при наличии соответствующих
 настроек в файле [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm).


Для публикации приложения в социальных сетях:


	- выполните команду «Поделиться»,
	 которая находится в меню:


		- «[Отчет](UiExpress.chm::/purpose/UiExpress_Organizational_Starting.htm)» главного
		 меню экспресс-отчёта;


		- «[Регламентный отчет](uireport.chm::/desktop/organizational_management/Starting.htm)»
		 главного меню регламентного отчёта;


		- «[Документ](UiAdhoc.chm::/launching.htm)»
		 главного меню аналитической панели;


		- «[Рабочая книга](UiDw.chm::/Purpose/UiDw_Purpose_Basic_Window.htm)» главного
		 меню рабочей книги;


		- «[Модель](UiModelling.chm::/Web/UiModellind_w_MainWnd.htm)» главного
		 меню модели;


	- нажмите кнопку ![](Share_button.png) «Поделиться» на вкладке «Главная»
	 ленты инструментов навигатора объектов.


## Настройка публикации в социальных сетях из веб-приложения


По умолчанию кнопка ![](Share_button.png) «Поделиться»
 отображается в веб-приложении. Для скрытия кнопки в файле [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm)
 установите значение false для
 атрибута enabled элемента <shareSettings>.


Набор доступных социальных сетей задается в элементе <shareSettings>: для вложенных
 элементов <shareItem> установите
 значение атрибута name, определяющее
 имя социальной сети (допустимые значения: LiveJournal, GooglePlus) и значение
 атрибута enabled, определяющее
 доступность пункта меню для указанной социальной сети.


### Пример


Сделаем доступным пункт меню «GooglePlus» кнопки «Поделиться»:


<shareSettings enabled="true">
    <shareItem name="GooglePlus" enabled="true" />
 </shareSettings>
См. также:


[Дополнительные справочные материалы](../General_principles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
