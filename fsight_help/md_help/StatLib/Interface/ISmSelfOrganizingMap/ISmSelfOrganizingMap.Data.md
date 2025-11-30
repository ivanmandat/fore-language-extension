# ISmSelfOrganizingMap.Data

ISmSelfOrganizingMap.Data
-


# ISmSelfOrganizingMap.Data


## Синтаксис


Data: [ISlSeries](../ISlSeries/ISlSeries.htm);


## Описание


Свойство Data возвращает коллекцию
 рядов, предназначенных для кластеризации.


## Комментарии


Количество кластеров, на которые будут разделены данные, определяет
 свойство [ISmSelfOrganizingMap.ClusterCount](ISmSelfOrganizingMap.ClusterCount.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserSom;

	Var

	    som: SmSelfOrganizingMap;

	    x1: Array Of Double;

	    Obj: ISlSeries;

	    res, i, j: Integer;

	    indx0: Double;

	    masInteger: Array Of Integer;

	    masDouble: Array Of Double;

	    Membership: ISlSerie;

	    Cl: IClusterType;

	Begin

	    som := New SmSelfOrganizingMap.Create;

	    // Исходные данные

	    Obj := som.Data;

	    x1 := New double[6];

	    // Девятнадцать объектов с шестью признаками

	    x1[00] := 3.9; x1[01] := 31193917; x1[02] := 1.74;x1[03]:=2381740;x1[04]:=0;x1[05]:=5550;

	    Obj.Add.Value := x1;

	    x1[00] := -3; x1[01] := 36955182; x1[02] := 1.16;x1[03]:=2736690;x1[04]:=30200;x1[05]:=17000;

	    Obj.Add.Value := x1;

	    x1[00] := 4.3; x1[01] := 19169083; x1[02] := 1.02;x1[03]:=7617930;x1[04]:=68920;x1[05]:=21070;

	    Obj.Add.Value := x1;

	    x1[00] := 0.8; x1[01] := 172860370; x1[02] := 0.94;x1[03]:=8456510;x1[04]:=55455;x1[05]:=28000;

	    Obj.Add.Value := x1;

	    x1[00] := 3.6; x1[01] := 31281092; x1[02] := 1.02;x1[03]:=9220970;x1[04]:=755170;x1[05]:=7100;

	    Obj.Add.Value := x1;

	    x1[00] := 7; x1[01] := 1261832482; x1[02] := 0.9;x1[03]:=9326410;x1[04]:=270550;x1[05]:=498720;

	    Obj.Add.Value := x1;

	    x1[00] := 5.5; x1[01] := 1014003817; x1[02] := 1.58;x1[03]:=2973190;x1[04]:=314400;x1[05]:=480000;


    Obj.Add.Value := x1;

    x1[00] := 0; x1[01] := 224784210; x1[02] := 1.63;x1[03]:=1826440;x1[04]:=93000;x1[05]:=45970;

    Obj.Add.Value := x1;

    x1[00] := 1; x1[01] := 65619636; x1[02] := 0.83;x1[03]:=1636000;x1[04]:=12000;x1[05]:=94000;

    Obj.Add.Value := x1;

    x1[00] := 1.7; x1[01] := 16733227; x1[02] := -0.05;x1[03]:=2669800;x1[04]:=47500;x1[05]:=22000;

    Obj.Add.Value := x1;

    x1[00] := 2; x1[01] := 5115450; x1[02] := 2.42;x1[03]:=1759540;x1[04]:=0;x1[05]:=4700;

    Obj.Add.Value := x1;

    x1[00] := 3.7; x1[01] := 100349766; x1[02] := 1.53;x1[03]:=1923040;x1[04]:=49510;x1[05]:=61000;

    Obj.Add.Value := x1;

    x1[00] := 3.5; x1[01] := 2650952; x1[02] := 1.54;x1[03]:=1565000;x1[04]:=0;x1[05]:=800;

    Obj.Add.Value := x1;

    x1[00] := 2; x1[01] := 10075511; x1[02] := 2.75;x1[03]:=1266700;x1[04]:=300;x1[05]:=660;

    Obj.Add.Value := x1;

    x1[00] := 2.4; x1[01] := 27012899; x1[02] := 1.75;x1[03]:=1280000;x1[04]:=5220;x1[05]:=12800;


    Obj.Add.Value := x1;

    x1[00] := 3.2; x1[01] := 146001176; x1[02] := -0.38;x1[03]:=16995800;x1[04]:=79400;x1[05]:=40000;

    Obj.Add.Value := x1;

    x1[00] := 1.6; x1[01] := 22023506; x1[02] := 3.28;x1[03]:=1960582;x1[04]:=0;x1[05]:=4350;

    Obj.Add.Value := x1;

    x1[00] := 3; x1[01] := 35079814; x1[02] := 2.84;x1[03]:=2376000;x1[04]:=129810;x1[05]:=19460;

    Obj.Add.Value := x1;

    x1[00] := 4.1; x1[01] := 275562673; x1[02] := 0.91;x1[03]:=9158960;x1[04]:=470131;x1[05]:=207000;


    Obj.Add.Value := x1;

    // Количество кластеров

    som.ClusterCount := 3;

    // Количество итераций

    som.Epoch := 300;

    // Метод обработки пропусков

    som.MissingData.Method := MissingDataMethod.Casewise;

    // Выполняем расчёт и выводим результаты

    res := som.Execute;

    If res = 0 Then

        Debug.WriteLine(" == Принадлежность объектов к кластерам == ");

        Membership := som.Membership;

        For i := 0 To Membership.Value.Length - 1 Do

            indx0 := Membership.Value[i];

            Debug.WriteLine(i.ToString + ",  " + indx0.ToString)

        End For;

        Debug.WriteLine(" == Список объектов по кластерам == ");

        For i := 0 To som.ClusterCount - 1 Do //по кластерам

            Debug.WriteLine("Кластер №" + i.ToString);

            masInteger := som.Clusters.Item(i).ObjectsList;

            For j := 0 To som.Clusters.Item(i).Size - 1 Do //по всем объектам в кластере

                indx0 := masInteger[j];

                Debug.WriteLine(indx0.ToString + ",  ");

            End For;

            Debug.WriteLine("");

        End For;

        Debug.WriteLine(" == Центры кластеров == ");

        For i := 0 To som.ClusterCount - 1 Do

            Debug.WriteLine("Кластер №" + i.ToString);

            Cl := som.Clusters.Item(i);

            masDouble := Cl.Center;

            For j := 0 To Cl.Center.Length - 1 Do

                indx0 := masDouble[j];

                Debug.WriteLine(indx0.ToString + ",  ");

            End For;

            Debug.WriteLine("");

        End For;

    End If;

End Sub UserSom;


Результат выполнения процедуры: для указанных данных будет выполнена кластеризация
 с помощью самоорганизующихся карт Кохонена, результаты кластеризации будут
 выведены в окно консоли.


См. также:


[ISmSelfOrganizingMap](ISmSelfOrganizingMap.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
