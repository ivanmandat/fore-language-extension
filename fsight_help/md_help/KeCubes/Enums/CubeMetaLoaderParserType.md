# CubeMetaLoaderParserType

CubeMetaLoaderParserType
-


# CubeMetaLoaderParserType


## Описание


Перечисление CubeMetaLoaderParserType
 содержит порядок распознавания атрибутов в источнике данных.


Используется следующими свойствами и методами:


	- [ICubeMetaLoaderBindingParser.ParserType](../Interface/ICubeMetaLoaderBindingParser/ICubeMetaLoaderBindingParser.ParserType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 FixedPosition.
		 Атрибуты распознаются по фиксированным позициям, определяемым
		 свойствами [ICubeMetaLoaderBindingParser.StringPositionStart](../Interface/ICubeMetaLoaderBindingParser/ICubeMetaLoaderBindingParser.StringPositionStart.htm)
		 и [ICubeMetaLoaderBindingParser.StringPositionEnd](../Interface/ICubeMetaLoaderBindingParser/ICubeMetaLoaderBindingParser.StringPositionEnd.htm).


		 1
		 Delimited.
		 Атрибуты распознаются из списка с разделителями. Параметры данного
		 метода определяются свойствами [ICubeMetaLoaderBindingParser.DelimiterChars](../Interface/ICubeMetaLoaderBindingParser/ICubeMetaLoaderBindingParser.DelimiterChars.htm)
		 и [ICubeMetaLoaderBindingParser.DelimitedPosition](../Interface/ICubeMetaLoaderBindingParser/ICubeMetaLoaderBindingParser.DelimitedPosition.htm).


		 2
		 Regexp.
		 Атрибуты распознаются по регулярному выражению. Параметры данного
		 метода определяются свойствами [ICubeMetaLoaderBindingParser.RegExp](../Interface/ICubeMetaLoaderBindingParser/ICubeMetaLoaderBindingParser.RegExp.htm)
		 и [ICubeMetaLoaderBindingParser.CaptureGroup](../Interface/ICubeMetaLoaderBindingParser/ICubeMetaLoaderBindingParser.CaptureGroup.htm).


См. также:


[Перечисления сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
