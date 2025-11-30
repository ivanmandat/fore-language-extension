# IPrxJsPlugin

IPrxJsPlugin
-


# IPrxJsPlugin


Сборка: Report;


## Описание


Интерфейс IPrxJsPlugin предназначен
 для работы с листом регламентного отчёта, который формируется с помощью
 [JS-плагина](DataAnalysis.chm::/Plugins/Plugins.htm).


## Иерархия наследования


IPrxJsPlugin


## Комментарии


Лист можно получить путём приведения листа, описываемого интерфейсом
 [IPrxSheet](../IPrxSheet/IPrxSheet.htm), к интерфейсу IPrxJsPlugin.
 Приведение возможно, если свойство [IPrxSheet.Type](../IPrxSheet/IPrxSheet.Type.htm)
 возвращает значение [PrxSheetType.JsPlugin](../../Enums/PrxSheetType.htm).


Для получения подробной информации о подключении плагина к регламентному
 отчёту обратитесь к разделу «[Подключение
 плагина к регламентному отчёту](DataAnalysis.chm::/Plugins/Connecting_Plugins_Report.htm)».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [PluginId](IPrxJsPlugin.PluginId.htm)
		 Свойство PluginId определяет
		 идентификатор [JS-плагина](DataAnalysis.chm::/Plugins/Plugins.htm),
		 который используется для формирования листа.


См. также:


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
