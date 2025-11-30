# IWxViewExporter.FullLengthTitle

IWxViewExporter.FullLengthTitle
-


# IWxViewExporter.FullLengthTitle


## Синтаксис


		FullLengthTitle: Boolean;


## Описание


Свойство FullLengthTitle определяет,
 будет ли обрезаться заголовок при экспорте если его ширина превышает ширину
 рабочего пространства.


## Комментарии


Свойство актуально при экспорте объектов, имеющих отдельный [заголовок](ModDrawing.chm::/Interface/IGxTitle/IGxTitle.htm)
 и рабочее пространство


Если свойству FullLengthTitle
 установить значение True, то экспорт
 будет произведен таким образом, чтобы заголовок вместился полностью. При
 этом изображение рабочего пространство будет расположено по центру относительно
 заголовка.


По умолчанию свойству FullLengthTitle
 установлено значение False, при
 этом заголовок обрезается. Изображения заголовка и рабочего пространства
 будут выровнены относительно левого края.


## Пример


Пример использования приведен в описании [IWxViewExporter.ExportToFile](IWxViewExporter.ExportToFile.htm).


См. также:


[IWxViewExporter](IWxViewExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
