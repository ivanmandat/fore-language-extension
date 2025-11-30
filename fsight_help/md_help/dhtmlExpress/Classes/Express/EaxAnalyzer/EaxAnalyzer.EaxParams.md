# EaxAnalyzer.EaxParams

EaxAnalyzer.EaxParams
-


# EaxAnalyzer.EaxParams


## Синтаксис


EaxParams() : Array of [PP.Mb.Param](dhtmlMetabase.chm::/Classes/Metabase/Param/Param.htm);


## Описание


Свойство EaxParams определяет
 массив [параметров](UiExpress.chm::/Express/Data_sources_parameters.htm)
 экспресс-отчета.


## Комментарии


Для работы со свойством используются следующие методы:


	- getEaxParams(). Возвращает
	 все параметры экспресс-отчета;


	- getEaxParamById(id).
	 Возвращает параметр экспресс-отчета по идентификатору. id : string.
	 Идентификатор параметра;


	- setEaxParam(param, id).
	 Устанавливает параметр экспресс-отчета. param : [PP.Mb.Param](dhtmlMetabase.chm::/Classes/Metabase/Param/Param.htm).
	 Объект параметра; id : string. Идентификатор параметра;


	- clearEaxParams(). Удаляет
	 все параметры экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Экспресс отчет должен содержать
 параметры отчета:


// Получим экземпляр экспресс-отчета
eaxAnalyzer = expressBox.getSource();
// Получим все параметры
allParams = eaxAnalyzer.getEaxParams();
// Получим идентификатор первого параметра
firstId = allParams[0].getId();
// Получим параметр по индексу
firstParam = eaxAnalyzer.getEaxParamById(firstId);
// Создадим новый параметр, на основе текущего
settings = firstParam.getSettings();
settings.Id = "NEWEAXPARAM";
settings.Name = "NewEaxParam";
settings.Metadata.id = "NEWEAXPARAM";
settings.Metadata.n = "NewEaxParam";
settings.Metadata.value = "10";
newParam = new PP.Mb.Param(settings);
// Удалим все параметры
eaxAnalyzer.clearEaxParams();
// Добавим новый параметр
eaxAnalyzer.setEaxParam(newParam, settings.Id);

В результате выполнения примера были удалены старые параметры и добавлен
 один новый, построенный на основе первого параметра.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
