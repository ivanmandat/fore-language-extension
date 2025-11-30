# DimSrv.open

DimSrv.open
-


# DimSrv.open


## Синтаксис


open(key: Number | Object, loadAllElements: Boolean,
 getAttr: Boolean, pattern: Object, callback: function, params: Object,
 binding: Object);


## Параметры


key. Ключ или моникер справочника,
 который необходимо открыть;


loadAllElements. Признак загрузки
 всех элементов справочника. Допустимые значения:


	- true.
	 Осуществляется загрузка всех элементов справочника;


	- false.
	 Загрузка всех элементов справочника не осуществляется;


getAttr. Признак извлечения
 информации об атрибутах справочника. Допустимые значения:


	- true.
	 Будет извлекаться информация об атрибутах справочника;


	- false.
	 Информация об атрибутах справочника не будет извлекаться;


pattern. Шаблон, в соответствии
 с которым будут извлекаться метаданные справочника;


callback. Процедура обратного
 вызова;


params. Параметры справочника.
 Массив объектов типа [PP.Mb.Param](dhtmlMetabase.chm::/Classes/Metabase/Param/Param.htm);


binding. Параметры вывода результата.
 Объект должен содержать поля: ID
 - идентификатор справочника; GROUP
 - наименование группы; ATTRIBUTEVALUE
 - значение атрибута; SELECTIONMODE
 - способ выбора элементов; LEVELATTR
 - атрибуты уровня.


## Описание


Метод open открывает справочник.


## Комментарии


Если параметр pattern не задан, в качестве него будет передан объект:


{


getDescr: true,


getAttrs: true,


getLevs: true,


getHiers: true,


getGroups: true,


getSchemas: true,


getSelection: true,


getCompound: true,


getErrorInfo: true,


getIndexes: true,


getCalendarLevs: true


};


## Пример


Пример использования приведён на странице описания [конструктора
 класса DimSrv](Constructor_DimSrv.htm).


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
