# IMsFormulaTransform.DimensionTransparent

IMsFormulaTransform.DimensionTransparent
-


# IMsFormulaTransform.DimensionTransparent


## Синтаксис


		DimensionTransparent(OutputVariable: [IMsFormulaTransformVariable](../IMsFormulaTransformVariable/IMsFormulaTransformVariable.htm);
		 Dimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm)):
		 Boolean;


## Параметры


OutputVariable, Выходная переменная;


Dimension. Дополнительное измерение
 выходной переменной, для которой необходимо установить общую спецификацию
 по всем элементам.


## Описание


Свойство DimensionTransparent
 определяет признак использования общей спецификации расчёта для элементов
 измерения выходной (моделируемой) переменной.


## Комментарии


Для моделей межотраслевого баланса всегда используется общая спецификация
 по всем измерениям выходных переменных.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Vari: IMsVariable;

		    Dim: IDimensionModel;

		Begin

		    MB := MetabaseClass.Active;

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_Balance";

		    CrInf.Name := "New_Balance";

		    CrInf.Parent := Mb.ItemById("KONT_MODEL");

		    CrInf.Permanent := False;

		    MObj := Mb.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Model.Kind := MsModelKind.InterindustryBalance;

		    Vari := MB.ItemByIdNamespace("Var_1",MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

		    Model.Output.Add(Vari);

		    Dim := Vari.Dimensions.Item(0).Model;

		    Model.Transform.DimensionTransparent(Model.Transform.Outputs.Item(0),Dim) := True;

		    MObj.Save;

		End Sub UserProc;


После выполнения примера в контейнере моделирования с идентификатором
 KONT_MODEL будет создана новая модель. Тип модели - межотраслевой баланс.
 В качестве переменной конечного использования будет установлена переменная
 с идентификатором VAR_1.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
