# MetabaseSaveDialog.SaveAsObject

MetabaseSaveDialog.SaveAsObject
-


**


# MetabaseSaveDialog.SaveAsObject


## Синтаксис


SaveAsObject: function(sender, args)


## Параметры


*sender*. Источник события;


*args*. Информация о событии. Доступный аргумент - JSON-объект
 с настройками диалога (id - идентификатор сохранённого объекта, Name -
 его имя, Names - массив переводов его имени на различные языки, Operation
 - тип выполненной операции, ParentKey - ключ родительского объекта репозитория,
 ParentMbObject - родительский объект репозитория).


## Описание


Событие SaveAsObject**
 генерируется при сохранении объекта в репозиторий.


## Пример


Пример использования события приведён на странице «[Пример
 создания компонента MetabaseSaveDialog](../../../Components/Metabase/Dialogs/MetabaseSaveDialog/MetabaseSaveDialog_Example.htm)».


См. также:


[MetabaseSaveDialog](MetabaseSaveDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
