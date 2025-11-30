# EaxMdService.setDataSourceFactor

EaxMdService.setDataSourceFactor
-


# EaxMdService.setDataSourceFactor


## Синтаксис


setDataSourceFactor(analyzer, dSource, factorKeys,
 opType, sourceMeta, callback, fireEvent);


## Параметры


*analyzer.* PP.Exp.[EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Экземпляр экспресс-отчета;


dSource. PP.Mb.Descriptor |
 String. Ключ источника или объект PP.Mb.Descriptor;


factorKeys. Array. Ключи показателей;


opType. PP.Exp.[EaxDataSourceFactOperationType](../../../Enums/EaxDataSourceFactOperationType.htm).
 Тип операции;


sourceMeta. Object. Метаданные
 результата поиска в формате tns_PP_SOM: SearchSourceDataMeta;


*callback. PP.Delegate.*
 Обработчик завершения установки варианта отображения.


fireEvent. Boolean. Признак
 вызова события.


## Описание


Метод setDataSourceFactor устанавливает
 источник отчета по показателю внутри источника.


## Комментарии


Метод используется для установки источника отчета при использовании
 поиска.


## Пример


Метод предназначен для внутреннего использования.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
