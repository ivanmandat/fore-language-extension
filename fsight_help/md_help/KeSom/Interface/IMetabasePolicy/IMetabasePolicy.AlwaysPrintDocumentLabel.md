# IMetabasePolicy.AlwaysPrintDocumentLabel

IMetabasePolicy.AlwaysPrintDocumentLabel
-


# IMetabasePolicy.AlwaysPrintDocumentLabel


## Синтаксис


AlwaysPrintDocumentLabel: Boolean;


## Описание


Свойство AlwaysPrintDocumentLabel
 определяет, будет ли выводиться штамп маркировки независимо от применяемого
 метода разграничения доступа и от настроек по маркировке документов при
 экспорте и печати.


## Комментарии


При значении True штамп маркировки
 будет выводиться при экспорте и печати независимо от применяемого метода
 разграничения доступа и от настроек по маркировке документов при экспорте
 и печати. Для корректной работы определите формат штампа маркировки.


Примечание.
 При экспорте отчета в формат RTF можно отключить вывод штампа маркировки,
 установив [IPrxReportExporter.ExportSecurityLabels](KeReport.chm::/Interface/IPrxReportExporter/IPrxReportExporter.ExportSecurityLabels.htm)
 в False.


По умолчанию свойство имеет значение False.
 В этом случае для вывода штампа маркировки:


	- включите [мандатный
	 доступ](Admin.chm::/04_SecurityPolicy/Admin_PermSep_M.htm) или [доступ по
	 уровням безопасности](Admin.chm::/04_SecurityPolicy/Security_levels.htm);


	- включите [маркировку
	 документов при экспорте и печати](Admin.chm::/03_Admin/Admin_MandatAccessParam.htm);


	- настройте [штамп
	 маркировки](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Admin_MandatAccess_Marking.htm).


После задания значения свойству примените политику
 безопасности, используя [IMetabaseSecurity.Apply](../IMetabaseSecurity/IMetabaseSecurity.Apply.htm).


## Пример


Пример использования свойства приведен в примере для [IGxDocument.OwnMultiCopiesPrint](ModDrawing.chm::/Interface/IGxDocument/IGxDocument.OwnMultiCopiesPrint.htm).


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
