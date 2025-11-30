# EaxAnalyzer.SourceParams

EaxAnalyzer.SourceParams
-


# EaxAnalyzer.SourceParams


## Синтаксис


SourceParams() : Array of [PP.Mb.Param](dhtmlMetabase.chm::/Classes/Metabase/Param/Param.htm);


## Описание


Свойство SourceParams определяет
 массив параметров источника данных.


## Комментарии


Для работы со свойством используются следующие методы:


	- getSourceParams(). Возвращает
	 все параметры источника данных;


	- getSourceParamById(id).
	 Возвращает параметр источника данных по идентификатору. id : string.
	 Идентификатор параметра;


	- setSourceParam(param,
	 id). Устанавливает параметр источника данных. param : [PP.Mb.Param](dhtmlMetabase.chm::/Classes/Metabase/Param/Param.htm).
	 Объект параметра; id : string. Идентификатор параметра;


	- clearEaxParams(). Удаляет
	 все параметры источника данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Источник данных экспресс отчета
 должен содержать параметры:


// Получим экземпляр экспресс-отчета
eaxAnalyzer = expressBox.getSource();
// Получим все параметры
allParams = eaxAnalyzer.getSourceParams();
// Получим идентификатор первого параметра
firstId = allParams[0].getId();
// Получим параметр по индексу
firstParam = eaxAnalyzer.getSourceParamById(firstId);
// Создадим новый параметр, на основе текущего
settings = firstParam.getSettings();
settings.Id = "NEWSOURCEPARAM";
settings.Name = "NewSourceParam";
settings.Metadata.id = "NEWSOURCEPARAM";
settings.Metadata.n = "NewSourceParam";
settings.Metadata.value = "10";
newParam = new PP.Mb.Param(settings);
// Удалим все параметры
eaxAnalyzer.clearSourceParams();
// Добавим новый параметр
eaxAnalyzer.setSourceParam(newParam, settings.Id);

В результате выполнения примера были удалены старые параметры источника
 данных и добавлен один новый, построенный на основе первого параметра.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
