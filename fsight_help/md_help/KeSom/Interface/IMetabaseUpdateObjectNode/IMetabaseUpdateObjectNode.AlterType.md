# IMetabaseUpdateObjectNode.AlterType

IMetabaseUpdateObjectNode.AlterType
-


# IMetabaseUpdateObjectNode.AlterType


## Синтаксис


AlterType: [MetabaseObjectAlterType](../../Enums/MetabaseObjectAlterType.htm);


## Описание


Свойство AlterType определяет,
 в каком случае объект будет пересоздаваться на уровне СУБД.


## Комментарии


Свойство актуально только для следующих классов объектов: таблица, хранимая
 процедура, представление.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором TABLE.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MU: IMetabaseUpdate;

	    Node: IMetabaseUpdateObjectNode;

	Begin

	    Mb := MetabaseClass.Active;

	    MU := Mb.CreateUpdate;

	    Node := MU.RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

	    Node.Object := Mb.ItemById("TABLE");

	    Node.AlterType := MetabaseObjectAlterType.Recreate;

	    MU.SaveToFileNF("c:\Update1.pefx");

	End Sub UserProc;


После выполнения примера будет создано обновление. Таблица, содержащаяся
 в обновлении, при обновлении в любом случае будет пересоздана на уровне
 СУБД.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
