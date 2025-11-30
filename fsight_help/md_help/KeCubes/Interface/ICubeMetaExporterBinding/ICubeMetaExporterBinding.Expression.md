# ICubeMetaExporterBinding.Expression

ICubeMetaExporterBinding.Expression
-


# ICubeMetaExporterBinding.Expression


## Синтаксис


Expression: String;


## Описание


Свойство Expression определяет
 выражение вычисляемой привязки.


## Комментарии


Привязка является вычисляемой, если свойство [ICubeMetaExporterBinding.BindingType](ICubeMetaExporterBinding.BindingType.htm)
 имеет значение [CubeMetaExporterBindingType.Calculated](../../Enums/CubeMetaExporterBindingType.htm).


Корректный экспорт вычисляемой привязки возможен, если для приёмника
 данных указан репозиторий, то есть задано свойство [IDtObject.Metabase](KeDt.chm::/Interface/IDtObject/IDtObject.Metabase.htm).


## Пример


Использование свойства приведено в примере для [ICubeMetaExporterBinding.DateFormatEx](ICubeMetaExporterBinding.DateFormatEx.htm).


См. также:


[ICubeMetaExporterBinding](ICubeMetaExporterBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
