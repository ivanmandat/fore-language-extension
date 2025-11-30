# IEaxOpenObjectContext.ExternalXML

IEaxOpenObjectContext.ExternalXML
-


# IEaxOpenObjectContext.ExternalXML


## Синтаксис


		ExternalXML: [IXmlDomElement](ModXml.chm::/develop.htm);


## Описание


Свойство ExternalXML определяет
 пользовательские настройки в формате XML.


## Комментарии


Свойство актуально, если свойству [EnableUserData](IEaxOpenObjectContext.EnableUserData.htm)
 установлено значение True.


Пользовательские настройки будут переданы в регламентный отчёт при его
 открытии. Самим регламентным отчётом настройки ни как не обрабатываются,
 но они могут быть обработаны в прикладном макросе, который обрабатывает
 события регламентного отчёта или подключён в регламентном отчёте и выполняется
 при определённых действиях.


## Пример


Использование свойства приведено в примере для [IEaxDrillSettings.OpenObjectContext](../IEaxDrillSettings/IEaxDrillSettings.OpenObjectContext.htm).


См. также:


[IEaxOpenObjectContext](IEaxOpenObjectContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
