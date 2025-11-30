# IGxStamp

IGxStamp
-


# IGxStamp


Сборка: Drawing;


## Описание


Интерфейс IGxStamp содержит
 настройки штампа маркировки документа.


## Иерархия наследования


           IGxStamp


## Комментарии


Используется интерфейсом [IGxStamps](../IGxStamps/IGxStamps.htm).


Штамп маркировки выводится при экспорте и печати, если:


	- включен [мандатный
	 доступ](Admin.chm::/04_SecurityPolicy/Admin_PermSep_M.htm) или [доступ по
	 уровням безопасности](Admin.chm::/04_SecurityPolicy/Security_levels.htm);


	- включена [маркировка
	 документов при экспорте и печати](Admin.chm::/03_Admin/Admin_MandatAccessParam.htm);


	- задан текст штампа маркировки через [IGxStamp.Rtf](IGxStamp.Rtf.htm).


Совет. Для отображения
 штампа маркировки независимо от применения мандатного доступа или доступа
 по уровням безопасности установите свойство [IMetabasePolicy.AlwaysPrintDocumentLabel](KeSom.chm::/Interface/IMetabasePolicy/IMetabasePolicy.AlwaysPrintDocumentLabel.htm)
 в True.


Настройки штампа маркировки сохраняются вместе с отчетом.


Примечание.
 При экспорте отчета в формат RTF можно отключить вывод штампа маркировки,
 установив [IPrxReportExporter.ExportSecurityLabels](KeReport.chm::/Interface/IPrxReportExporter/IPrxReportExporter.ExportSecurityLabels.htm)
 в False.


Для настройки штампа маркировки для всех отчетов и документов репозитория
 используйте диалог «[Штамп
 маркировки](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Admin_MandatAccess_Marking.htm)».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Appearance](IGxStamp.Appearance.htm)
		 Свойство Appearance
		 определяет варианты размещения штампа на страницах.


		 ![](../../Property_Image.gif)
		 [Offset](IGxStamp.Offset.htm)
		 Свойство Offset определяет
		 смещение штампа от места расположения по умолчанию.


		 ![](../../Property_Image.gif)
		 [Rtf](IGxStamp.Rtf.htm)
		 Свойство Rtf определяет
		 текст штампа маркировки в формате rtf.


		 ![](../../Property_Image.gif)
		 [Size](IGxStamp.Size.htm)
		 Свойство Size определяет
		 размеры штампа.


См. также:


[Интерфейсы сборки Drawing](../ModDrawing_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
