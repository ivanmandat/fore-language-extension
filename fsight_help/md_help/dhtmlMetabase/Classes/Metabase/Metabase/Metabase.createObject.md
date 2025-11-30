# Metabase.createObject

Metabase.createObject
-


# Metabase.createObject


## Синтаксис


createObject (parentKey, name, id, classId, permanent, callback)


## Параметры


parentKey. Ключ родительского объекта;


name. Имя объекта;


id. Идентификатор создаваемого объекта;


classId. Класс объекта, экземпляр перечисления PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm);


permanent. Параметр зарезервирован на будущее;


callback. Процедура обратного вызова.


## Описание


Метод createObject создает новый объект репозитория.


## Пример


Для выполнения примера предполагается наличие на странице соединения с репозиторием с наименованием «mb» (см. «[Пример создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Создадим объект репозитория - экспресс-отчет с наименованием «My_new_object_1» и идентификатором «newolap001»:


mb.createObject(0, "My_new_object_1", "newolap001", 2561, true, null);


mb.refresh()


После выполнения примера в корневой папке репозитория будет создан экспресс-отчет с заданным именем и идентификатором.


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
