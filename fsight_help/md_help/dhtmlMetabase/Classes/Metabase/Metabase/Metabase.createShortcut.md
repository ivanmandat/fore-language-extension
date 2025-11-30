# Metabase.createShortcut

Metabase.createShortcut
-


# Metabase.createShortcut


## Синтаксис


createShortcut (parentKey, objectKey, name, id, classId, callback)


## Параметры


parentKey. Ключ папки, в которой будет создан ярлык;


objectKey. Ключ объекта репозитория, для которого будет создан ярлык;


name. Имя ярлыка;


id. Идентификатор ярлыка;


classId. Класс ярлыка, экземпляр класса PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm). Если параметр не задан, используется тот же класс, что и у объекта, для которого создан ярлык;


callback. Процедура обратного вызова. Необязательный параметр.


## Описание


Метод createShortcut создает ярлык для объекта репозитория.


## Пример


Для выполнения примера предполагается наличие на странице соединения с репозиторием с наименованием «mb» (см. «[Пример создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Необходимо, чтобы в репозиторию был объект с ключом 764577. Создадим ярлык для этого объекта:


mb.createShortcut(0, 764577, "myshortcut001", "Shortcut_to_object_764577");


mb.refresh()


После выполнения примера в корневой папке репозитория будет создан ярлык для объекта с ключом 764577. Имя ярлыка - «myshortcut001», идентификатор -«Shortcut_to_object_764577».


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
