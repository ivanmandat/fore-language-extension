# PP.App.openObject

PP.App.openObject
-


# PP.App.openObject


## Синтаксис


openObject(mbObject, openMode, settings);


## Параметры


mbObject. [PP.Mb.Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)
 | Object. Объект репозитория;


Может быть передан объект с настройками создания
 PP.Mb.Object или объект, содержащий следующие поля:


{
k : Number // Определяет свойство "Key" объекта репозитория
n : String // Определяет свойство "Name" объекта репозитория
i : String // Определяет свойство "Id" объекта репозитория
c : Number // Определяет свойство "Class" объекта репозитория
"@isShortcut" : Boolean // Определяет свойство "IsShortcut" объекта репозитория
"@isLink" : Boolean // Определяет свойство "IsLink" объекта репозитория
p : Number // Определяет свойство "ParentKey" объекта репозитория
}
openMode. [PP.App.OpenMode](../../Enums/OpenMode.htm).
 Режим открытия объекта репозитория;


settings. Object. Дополнительные
 параметры для открытия объекта. Необязательный параметр.


Может содержать поле target
 - наименование нового окна, в котором будет открыт модуль. Если параметр
 не указан - будет открыто в том же окне.


Параметр аналогичен параметру settings
 метода [PP.App.openAppModule](PP.App.openAppModule.htm).


## Описание


Метод openObject открывает объект
 репозитория.


## Пример


Использование метода приведено в примере для [PP.App.setObjectName](PP.App.setObjectName.htm).


См. также:


[PP.App](../PP.App.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
