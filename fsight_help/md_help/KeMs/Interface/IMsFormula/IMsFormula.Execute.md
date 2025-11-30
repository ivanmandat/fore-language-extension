# IMsFormula.Execute

IMsFormula.Execute
-


# IMsFormula.Execute


## Синтаксис


		Execute(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);


		        Coord:
		 [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);


		        Callback:
		 [IMsFormulaExecuteCallback](../IMsFormulaExecuteCallback/IMsFormulaExecuteCallback.htm));


## Параметры


Calculation. Определяет параметры,
 необходимые при расчёте метода;


Coord. Определяет параметры
 координаты в переменной, по которой будет производиться расчёт;


Callback. Определяет объект
 для обратной связи при расчёте метода.


## Описание


Метод Execute осуществляет расчёт
 метода.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1» и компонента Memo
 с наименованием «Memo1». В компоненте «Memo1» должны содержаться параметры
 модели в виде XML-кода.


Пример является обработчиком события OnClick
 для кнопки «Button1».


Добавьте ссылки на системные сборки: Metabase, Ms.


					Class MsCallbackimpl:Object, IMsFormulaExecuteCallback

		    Sub ResultMatrix(Matrix: IMatrix; Conditions: IOrmConditions);

		    Var

		        Ite: IMatrixIterator;

		    Begin

		        Debug.WriteLine("Выполнение.");

		        Ite := Matrix.CreateIterator;

		        Ite.Move(IteratorDirection.First);

		        While Ite.Valid Do

		            Debug.WriteLine(Ite.Value);

		            Ite.Move(IteratorDirection.Next);

		        End While;

		    End Sub ResultMatrix;

		End Class MsCallbackimpl;


		Class TestForm: Form

		    Button1: Button;

		    Memo1: Memo;

		    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		    Var

		        ActiveMetabase: IMetabase;

		        Transform: IMsFormulaTransform;

		        TransformVar: IMsFormulaTransformVariable;

		        Coord: IMsFormulaTransformCoord;

		        Slice: IMsFormulaTransformSlice;

		        Selector: IMsFormulaTransformSelector;

		        Formula: IMsFormula;

		        Calcul: IMsMethodCalculation;

		        Per: IMsModelPeriod;

		        CallBack: MsCallbackimpl;

		        XmlNode: IXmlDomElement;

		        cl: FreeThreadedDOMDocument60;

		    Begin

		        ActiveMetabase := MetabaseClass.Active;

		        cl := New FreeThreadedDOMDocument60.Create;

		        cl.loadXML(Memo1.Text);

		        XmlNode := cl.documentElement;

		        Transform := New MsFormulaTransform.Create(ActiveMetabase);

		        Transform.LoadFromXml(XmlNode);

		        TransformVar := Transform.Outputs.Item(0);

		        Coord := Transform.CreateCoord(TransformVar);

		        Slice := TransformVar.Slices.Item(0);

		        Selector := Transform.CreateSelector;

		        Selector.Slice := Slice;

		        Formula := Transform.Transform(Selector);

		        Calcul := Transform.CreateCalculation;

		        Per := Calcul.Period;

		        Per.IdentificationStartDate:= DateTime.ComposeDay(2000, 1, 1);

		        Per.IdentificationEndDate:= DateTime.ComposeDay(2004, 1, 1);

		        Per.ForecastStartDate:= DateTime.ComposeDay(2005, 1, 1);

		        Per.ForecastEndDate:= DateTime.ComposeDay(2007, 1, 1);

		        Calcul.CurrentPoint:= DateTime.ComposeDay(2005, 1, 1);

		        CallBack := New MsCallbackimpl.Create;

		        Formula.Execute(Calcul,Coord, CallBack);

		    End Sub Button1OnClick;

		End Class TestForm;


В результате выполнения примера в переменную TRANSFORM будут загружены
 параметры модели. Метод модели будет рассчитан.


См. также:


[IMsFormula](IMsFormula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
