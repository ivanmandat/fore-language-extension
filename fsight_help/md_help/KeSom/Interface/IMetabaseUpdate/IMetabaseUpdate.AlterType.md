# IMetabaseUpdate.AlterType

IMetabaseUpdate.AlterType
-


# IMetabaseUpdate.AlterType


## Синтаксис


		AlterType(ClassId:
		 Integer): [MetabaseObjectAlterType](../../Enums/MetabaseObjectAlterType.htm);


## Параметры


ClassId. Тип объекта репозитория.


## Описание


Свойство AlterType определяет
 настройки пересоздания объектов определённого класса на уровне СУБД.


## Комментарии


Для указания типа объекта репозитория в параметре ClassId
 используйте перечисление [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


Свойство актуально только для следующих классов объектов: таблица, хранимая
 процедура, представление.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pefx.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    U: IMetabaseUpdate;

		    N, N2,N3 : IMetabaseUpdateObjectNode;

		Begin

		    Mb:= MetabaseClass.Active;

		    U:= Mb.CreateUpdate;

		    U.AlterType(MetabaseObjectClass.KE_CLASS_TABLE):=
		 MetabaseObjectAlterType.Default_;

		    U.AlterType(MetabaseObjectClass.KE_CLASS_VIEW):=
		 MetabaseObjectAlterType.Recreate;

		    U.AlterType(MetabaseObjectClass.KE_CLASS_PROCEDURE):=
		 MetabaseObjectAlterType.Restrict;

		    N:= U.RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    N.Object := Mb.ItemById("TABLE");

		    N2:= u.RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    N2.Object := Mb.ItemById("PROC");

		    N3:= U.RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    N3.Object := Mb.ItemById("VIEW");

		    U.SaveToFileNF("c:\Update.pefx");

		End Sub UserProc;


В результате выполнения примера будут создано обновление, для которого
 будут определены следующие параметры: пересоздавать таблицы, только если
 структура объекта изменилась; всегда пересоздавать представления; никогда
 не пересоздавать хранимые процедуры.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
