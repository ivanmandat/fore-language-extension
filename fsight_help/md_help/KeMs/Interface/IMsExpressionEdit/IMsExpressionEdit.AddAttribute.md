# IMsExpressionEdit.AddAttribute

IMsExpressionEdit.AddAttribute
-


# IMsExpressionEdit.AddAttribute


## Синтаксис


		AddAttribute(Value: [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm));


## Параметры


Value. Атрибут базы данных
 временных рядов.


## Описание


Метод AddAttribute добавляет
 атрибут, значения которого будут использованы для составления рядов в
 компоненте.


## Комментарии


Параметр Value не может принимать
 значение Null. После выполнения
 метода значения добавленного атрибута будут доступны в компоненте и будут
 использоваться для составления рядов.


Количество атрибутов, добавленных для использования, можно получить
 в свойстве [IMsExpressionEdit.GetAttributeCount](IMsExpressionEdit.GetAttributeCount.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1» и компонента MsExpressionEdit
 с наименованием «MsExpressionEdit1». В репозитории предполагается наличие
 базы данных временных рядов с идентификатором FC_COMM. В контейнере моделирования
 данной базы содержится модель (детерминированное уравнение) с идентификатором
 MODEL_DETERM. Среди атрибутов базы добавлен обязательный атрибут Country,
 содержащий наименования стран.


Пример является обработчиком события OnClick
 для кнопки «Button1».


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms, Rds.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MB: IMetabase;

		    Rubr: IRubricator;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Determ: IMsDeterministicTransform;

		    TransVar: IMsFormulaTransformVariable;

		Begin

		    MB := MetabaseClass.Active;

		    Rubr := MB.ItemById("FC_COMM").Bind As IRubricator;

		    Model := MB.ItemByIdNamespace("MODEL_DETERM", Rubr.ModelSpace.Key).Bind As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Determ := Formula.Method As IMsDeterministicTransform;

		    TransVar := Transform.Outputs.Item(0);

		    //Настройка параметров компонента MsExpressionEdit

		    If MsExpressionEdit1.GetAttributeCount > 0 Then

		        MsExpressionEdit1.ClearAttributes;

		    End If;

		    MsExpressionEdit1.Rubricator := Rubr;

		    MsExpressionEdit1.FormulaTransform := Transform;

		    MsExpressionEdit1.FormulaTermList := Determ.Operands;

		    MsExpressionEdit1.Expression := Determ.Expression;

		    MsExpressionEdit1.AddAttribute(Rubr.Facts.Attributes.FindById("COUNTRY"));

		    MsExpressionEdit1.AddAttribute(Rubr.Facts.Attributes.FindById("DL"));

		End Sub Button1OnClick;


В результате выполнения примера компонент «MsExpressionEdit1» будет
 настроен на работу с уравнением модели «MODEL_DETERM». В MsExpressionEdit
 будут доступны все операнды модели и значения атрибутов «Период»
 и «Страны».


См. также:


[IMsExpressionEdit](IMsExpressionEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
