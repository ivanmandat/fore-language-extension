# IStandardCube.ChildRubricator

IStandardCube.ChildRubricator
-


# IStandardCube.ChildRubricator


## Синтаксис


		ChildRubricator: [IRubricator](../IRubricator/IRubricator.htm);


## Описание


Свойство ChildRubricator возвращает
 дочернюю БД временных рядов.


## Комментарии


Если дочерняя БД временных рядов отсутствует, то создается временная
 база. При сохранении связи сохраняются на исходный куб, а не на БД
 временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE».


Добавьте ссылки на системные сборки: Metabase, Cube, Rds.


					// Функция вывода данных

		Function ToString(Value: Variant): String;

		Var

		    sRes: String;

		    i, l, idx: integer;

		    s: String;

		    arr: Array Of Variant;

		Begin

		    Select Case Value.VarType

		        Case ForeVariantType.Integer:

		            i := Value;

		            sRes := i.ToString;

		        Case ForeVariantType.Matrix:

		            arr := Value As Array Of Variant;

		            l := arr.Length - 1;

		            For idx := 0 To l Do

		                s := s + ToString(arr[idx]) + "; ";

		            End For;

		            sRes := s;

		    End Select;

		    Return sRes;

		End Function ToString;


		// Основная процедура

		Sub UserProc;

		Var

		    mb: IMetabase;

		    Cube: IStandardCube;

		    Rub: IMetabaseObject;

		    RubI: IRubricatorInstance;

		    Key: Array[2];

		    FactD: IRubricatorFactData;

		    FactVal: IFactorObservationValues;

		    i: Integer;

		    Mem: IMetaDataMember;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем куб

		    Cube := mb.ItemById("STD_CUBE").Bind As IStandardCube;

		    // Получаем дочернюю БД временных рядов

		    Rub := Cube.ChildRubricator As IMetabaseObject;

		    If Rub <> Null Then

		        RubI := Rub.Open(Null) As IRubricatorInstance;

		        Key[0] := 512;

		        Key[1] := 1009;

		        // Получаем временной ряд по значению составного ключа

		        FactD := RubI.GetCompoundFactData(Key);

		        // Выводим данные о временном ряде

		        If FactD <> Null Then

		            Debug.WriteLine("____________");

		            Debug.WriteLine("Mnemo:" + FactD.Mnemo);

		            Debug.WriteLine("Key: " + FactD.FactorKey.ToString);

		            Debug.WriteLine("IsDeleted: " + FactD.IsDeleted.ToString);

		            Debug.WriteLine("IsEmpty: " + FactD.IsEmpty.ToString);

		            Debug.WriteLine("UseCompoundKey: " + FactD.UseCompoundKey.ToString);

		            Debug.WriteLine("CompoundKey: " + ToString(FactD.CompoundKey));

		            Debug.WriteLine("CompoundFactorKey: " + ToString(FactD.CompoundFactorKey));

		            Debug.WriteLine("____________");

		            // Выводим данные о наблюдениях временного ряда

		            For i := 1980 To 2012 Do

		                FactVal := RubI.GetObservationValues(FactD, DateTime.ComposeDay(i, 1, 1));

		                If FactVal <> Null Then

		                    Debug.WriteLine("Date: " + DateTime.ComposeDay(i, 1, 1).ToString);

		                    Debug.WriteLine("FactDataCompoundKey: " + ToString(FactVal.FactDataCompoundKey));

		                    Mem := FactVal.Record.Members.FindByKind(MetaAttributeKind.Value);

		                    Debug.WriteLine("Value: " + ToString(Mem.Value));

		                    Debug.WriteLine("----");

		                End If;

		            End For;

		        End If;

		    End If;

		End Sub UserProc;


После выполнения основной процедуры в окно консоли будут выведены данные
 о временном ряде и его наблюдениях, полученные по значению составного
 ключа.


См. также:


[IStandardCube](IStandardCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
