# IEaxOpenObjectContext

IEaxOpenObjectContext
-


# IEaxOpenObjectContext


Сборка: Express;


## Описание


Интерфейс IEaxOpenObjectContext
 предназначен для задания настроек, передаваемых в открываемый объект при
 расшифровке.


## Иерархия наследования


           IEaxOpenObjectContext


## Комментарии


Настройки, передаваемые в открываемый объект при расшифровке, возвращает
 свойство [IEaxDrillSettings.OpenObjectContext](../IEaxDrillSettings/IEaxDrillSettings.OpenObjectContext.htm).
 Актуально для использования, если открываемый объект - это регламентный
 отчёт.


Для использования передаваемых настроек в отчёте должен быть создан
 параметр с идентификатором REPORT_OPEN_CONTEXT. В данный параметр будут
 переданы настройки в формате XML.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActiveSheetKey](IEaxOpenObjectContext.ActiveSheetKey.htm)
		 Свойство ActiveSheetKey
		 определяет ключ листа регламентного отчёта, который должен стать
		 активным при открытии.


		 ![](../../Property_Image.gif)
		 [EnableUserData](IEaxOpenObjectContext.EnableUserData.htm)
		 Свойство EnableUserData
		 определяет, будут ли применяться пользовательские настройки при
		 открытии регламентного отчёта.


		 ![](../../Property_Image.gif)
		 [ExternalXML](IEaxOpenObjectContext.ExternalXML.htm)
		 Свойство ExternalXML
		 определяет пользовательские настройки в формате XML.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SaveToXml](IEaxOpenObjectContext.SaveToXml.htm)
		 Метод SaveToXml сохраняет
		 настройки в XML.


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
