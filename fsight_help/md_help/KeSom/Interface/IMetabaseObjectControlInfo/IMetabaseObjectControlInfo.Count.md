# IMetabaseObjectControlInfo.Count

IMetabaseObjectControlInfo.Count
-


# IMetabaseObjectControlInfo.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 вложенных объектов, параметрами которых можно управлять.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Obj, ControlObj: IMetabaseObjectDescriptor;

    ControlInfo: IMetabaseObjectControlInfo;

    Control: IMetabaseObjectControl;

    ParamControl: IMetabaseObjectParamControl;

    Param: IMetabaseObjectParam;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    Obj := Mb.ItemById("STD_CUBE");

    ControlInfo := Obj.Params.ControlInfo;

    For i := 0 To ControlInfo.Count - 1 Do

        Control := ControlInfo.Item(i);

        ControlObj := Control.ControlledObject;

        Debug.Write("Вложенный объект: " + ControlObj.Name + '(' + ControlObj.Id + ").");

        If Control.Count = 0 Then

            Debug.WriteLine(" Параметры отсутствуют.");

        Else

            Debug.WriteLine("");

            Debug.Indent;

            For j := 0 To Control.Count - 1 Do

                ParamControl := Control.Item(j);

                Param := ParamControl.ControlledParam;

                Debug.WriteLine("Параметр: " + Param.Name + '(' + Param.Id + ").");

            End For;

            Debug.Unindent;

        End If;

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о вложенных объектах куба и их параметрах.


См. также:


[IMetabaseObjectControlInfo](IMetabaseObjectControlInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
