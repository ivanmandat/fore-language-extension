# IMetabaseUpdateNode.Condition

IMetabaseUpdateNode.Condition
-


# IMetabaseUpdateNode.Condition


## Синтаксис


Condition: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Condition возвращает
 условие, при выполнении которого будет осуществляться обновление объекта.


## Пример


Для выполнения примера предполагается наличие объекта репозитория с
 идентификатором Form_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MU: IMetabaseUpdate;

	    Prop: IMetabaseUpdateProperty;

	    UFN: IMetabaseUpdateFolderNode;

	    UpdObject: IMetabaseUpdateObjectNode;

	Begin

	    MB := MetabaseClass.Active;

	    MU := MB.CreateUpdate;

	    // Добавляем флаг

	    Prop := MU.Properties.Add;

	    Prop.DataType := DbDataType.Integer;

	    Prop.Id := "Flag1";

	    Prop.Name := "Flag1";

	    Prop.Value := 1;

	    // Добавляем объект

	    UFN := MU.RootFolder;

	    UpdObject := UFN.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

	    UpdObject.Object := MB.ItemById("Form_1");

	    UpdObject.Label := MB.ItemById("Form_1").Name;

	    UpdObject.Condition.AsString := "Flag1 = 2";

	    // Сохраняем обновление

	    MU.SaveToFileNF("C:\Pef1.pefx");

	End Sub UserProc;


После выполнения примера будет создано новое обновление. В обновлении
 будет создан флаг, используемый для задания условий обновления, и в список
 объектов будет добавлен указанный объект репозитория. Для данного объекта
 будет задано условие, после чего обновление сохраняется в файл "C:\Pef1.pefx".


См. также:


[IMetabaseUpdateNode](IMetabaseUpdateNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
