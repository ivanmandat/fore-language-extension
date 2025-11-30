# IVariableStub.CopyScenarioData

IVariableStub.CopyScenarioData
-


# IVariableStub.CopyScenarioData


## Синтаксис


CopyScenarioData(ScenarioDim: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);
 Source: Integer; Destination: Integer);


## Параметры


ScenarioDim. Параметр не используется,
 оставлен для совместимости.


Source. Ключ сценария, данные
 с которого необходимо скопировать.


Destination. Ключ сценария,
 на который необходимо скопировать данные.


## Описание


Метод CopyScenarioData осуществляет
 копирование данных с одного сценария на другой.


## Комментарии


В качестве значения параметра ScenarioDim
 необходимо передавать значение Null.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере присутствует
 переменная с идентификатором OBJ_VAR. Переменная содержит более одного
 сценария.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Variable: IVariableStub;

    MsVAr: IMsVariable;

    S_From, S_To: Integer;

    ScenDim: IDimInstance;

    AttrIn: IDimAttributesInstance;

    N_From, N_To: string;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("OBJ_VAR", MB.ItemById("CONT_MODEL").Key).Edit;

    MsVAr := MObj As IMsVariable;

    ScenDim := MsVAr.ScenarioDimension;

    AttrIn := ScenDim.Attributes;

    S_From := AttrIn.FindById("SCEN_KEY").Value(0);

    N_From := AttrIn.FindById("NAME").Value(0);

    S_To := AttrIn.FindById("SCEN_KEY").Value(1);

    N_To := AttrIn.FindById("NAME").Value(1);

    Variable := MObj As IVariableStub;

    Variable.CopyScenarioData(Null, S_From, S_To);

    Debug.WriteLine("Данные скопированы со сценария '" + N_From + "' на сценарий '" + N_To +"'");

    MObj.Save;

End Sub UserProc;


После выполнения примера данные переменной будут с скопированы с одного
 сценария на другой. В окно консоли будет выведено сообщение с указанием
 наименований сценариев.


См. также:


[IVariableStub](IVariableStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
