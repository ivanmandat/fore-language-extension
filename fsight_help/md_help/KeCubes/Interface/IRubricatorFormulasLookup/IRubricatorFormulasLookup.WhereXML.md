# IRubricatorFormulasLookup.WhereXML

IRubricatorFormulasLookup.WhereXML
-


# IRubricatorFormulasLookup.WhereXML


## Синтаксис


WhereXML: String;


## Описание


Свойство WhereXML определяет
 XML код искомой формулы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента Memo с наименованием Memo1.
 В Memo1 должна содержаться формула в виде XML-кода. В репозитории должна
 присутствовать база данных временных рядов с идентификатором OBJ_RUBRICATOR,
 содержащая справочник формул.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    RubInst: IRubricatorInstance;

	    ForLoo: IRubricatorFormulasLookup;

	    FormulaData: IRubricatorFormulaData;

	Begin

	    Mb := MetabaseClass.Active;

	    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    ForLoo := RubInst.CreateFormulasLookup;

	    ForLoo.WhereXML := Memo1.Text;

	    FormulaData := ForLoo.LookupData;

	    Memo1.Clear;

	    If FormulaData <> Null Then

	        Memo1.Text := "Формула найдена. Ключ формулы: " + FormulaData.FormulaKey.ToString;

	    Else

	        Memo1.Text := "Формула не найдена";

	    End If;

	End Sub Button1OnClick;


После выполнения примера будет создан объект, осуществляющий поиск в
 базе данных временных рядов формулы по указанному XML-коду. Если формула
 будет найдена, то в Memo1 будет выведен её ключ.


См. также:


[IRubricatorFormulasLookup](IRubricatorFormulasLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
