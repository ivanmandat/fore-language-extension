# ICubeModel.Validate

ICubeModel.Validate
-


# ICubeModel.Validate


## Синтаксис


		Validate: [ICubeValidationAssertions](../ICubeValidationAssertions/ICubeValidationAssertions.htm);


## Описание


Метод Validate осуществляет
 проверку метаданных куба, находящегося на стадии редактирования.


## Комментарии


Результатом выполнения метода будет список возможных нарушений метаданных
 куба.


## Пример


Для выполнения примера предполагается наличие в репозитории вычисляемого
 куба с идентификатором «CALC_CUBE».


Добавьте ссылки на системные сборки: Cubes, Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    CalcCube: ICalculatedCube;

		    Cube: ICubeModel;

		    Validations: ICubeValidationAssertions;

		    Validation: ICubeValidationAssertion;

		    i, c: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    CalcCube := Mb.ItemById("CALC_CUBE").Edit As ICalculatedCube;

		    //...

		    //Внесение изменений в структуру куба

		    //...

		    //Проверка куба

		    Cube := CalcCube As ICubeModel;

		    Validations := Cube.Validate;

		    If Validations.IsEmpty = True Then

		        Debug.WriteLine("При проверке настроек куба нарушений не найдено.");

		    Else

		        c := Validations.Count;

		        Debug.WriteLine("Количество выявленных нарушений = " + c.ToString);

		        For i := 0 To c - 1 Do

		            Validation := Validations.Item(i);

		            Debug.WriteLine("Код причины: " + Validation.Code.ToString);

		            Debug.WriteLine("Уровень важности: " + Validation.Severity.ToString);

		            Debug.WriteLine(Validation.Text);

		            Debug.WriteLine("---------------------------");

		        End For;

		    End If;

		    If Validations.IsEmpty Or (Validations.MaxSeverity = CubeValidationAssertionSeverity.Info) Then

		        (CalcCube As IMetabaseObject).Save;

		    End If;

		End Sub UserProc;


В указанном примере после открытия куба на редактирование в его структуре
 могут быть внесены какие-либо изменения. После этого осуществляется проверка
 на корректность сформированных метаданных куба. Если имеются какие-либо
 нарушения, то информация о них будет выведена в консоль среды разработки.
 Если нарушения отсутствуют или имеют информационный характер, то внесённые
 изменения будут сохранены в кубе.


См. также:


[ICubeModel](ICubeModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
