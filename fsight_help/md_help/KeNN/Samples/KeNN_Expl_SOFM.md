# Создание самоорганизующейся сети Кохонена

Создание самоорганизующейся сети Кохонена
-


# Создание самоорганизующейся сети Кохонена


В примере демонстрируется, как можно классифицировать страны по
 заданному набору характеристик, используя сеть Кохонена. Данные стран
 реализованы классом Country.


Для выполнения добавьте ссылки на системные сборки «NN» и «Collections».


	Class Country: Object

	    Public Name: String;

	    Public GDP: Double;

	    Public Population: Double;

	    Public PopulationGrowthRate: Double;

	    Public AreaLand: Double;

	    Public AreaWater: Double;

	    Public IrrigatedLand: Double;


	    Public Constructor Create(_Name: String; _GDP: Double; _Population: Double; _PopulationGrowthRate: Double; _AreaLand: Double; _AreaWater: Double; _IrrigatedLand: Double);

	    Begin

	        Name := _Name;

	        GDP := _GDP;

	        Population := _Population;

	        PopulationGrowthRate := _PopulationGrowthRate;

	        AreaLand := _AreaLand;

	        AreaWater := _AreaWater;

	        IrrigatedLand := _IrrigatedLand;

	    End Constructor Create;


	    Public Constructor CreateEmpty;

	    Begin

	    End Constructor CreateEmpty;

	End Class Country;


	Function Max(D1, D2: Double): Double;

	Begin

	    If D1 > D2 Then

	        Return D1;

	    End If;

	    Return D2;

	End Function Max;


	// Метод для инициализации сети

	Sub NetworkInitialize(Network: NeuralNetwork);

	Var

	    numberOfClusters: Integer =3;

	    numberOfNeurons: array[0..0] Of Integer;

	Begin

	    numberOfNeurons[0] := numberOfClusters;

	    Network.CreateNetworkEx(1, 6, numberOfNeurons, 0.5, 3);

	    Network.InitSynapsesConvex;

	End Sub NetworkInitialize;


	Sub Main;

	Var

	    network: NeuralNetwork;

	    countries : ArrayList;

	    normalizedCountries: ArrayList;

	    i, epoch: Integer;

	    normalizedCountry, currCountry: Country;

	    inputs : array[0..5] Of Double;

	    alfa : Double;

	    learnRate : Double;

	    learnRadius: Integer;

	    sampleClass: Integer;

	Begin


	// Задаем начальные значения

	    countries := New ArrayList.Create;

	    countries.Add(New Country.Create("Algeria", 3.9, 31193917, 1.74, 2381740, 0, 5550));

	    countries.Add(New Country.Create("Argentina", -3, 36955182, 1.16, 2736690, 30200, 17000));

	    countries.Add(New Country.Create("Brazil", 0.8, 172860370, 0.94, 8456510, 55455, 28000));

	    countries.Add(New Country.Create("Canada", 3.6, 31281092, 1.02, 9220970, 755170, 7100));

	    countries.Add(New Country.Create("China", 7, 1261832482, 0.9, 9326410, 270550, 498720));

	    countries.Add(New Country.Create("India", 5.5, 1014003817, 1.58, 2973190, 314400, 480000));

	    countries.Add(New Country.Create("Indonesia", 0, 224784210, 1.63, 1826440, 93000, 45970));

	    countries.Add(New Country.Create("Iran", 1, 65619636, 0.83, 1636000, 12000, 94000));

	    countries.Add(New Country.Create("Kazakhstan", 1.7, 16733227, -0.05, 2669800, 47500, 22000));

	    countries.Add(New Country.Create("Libya", 2, 5115450, 2.42, 1759540, 0, 4700));

	    countries.Add(New Country.Create("Mexico", 3.7, 100349766, 1.53, 1923040, 49510, 61000));

	    countries.Add(New Country.Create("Mongolia", 3.5, 2650952, 1.54, 1565000, 0, 800));

	    countries.Add(New Country.Create("Niger", 2, 10075511, 2.75, 1266700, 300, 660));

	    countries.Add(New Country.Create("Peru", 2.4, 27012899, 1.75, 1280000, 5220, 12800));

	    countries.Add(New Country.Create("Russia", 3.2, 146001176, -0.38, 16995800, 79400, 40000));

	    countries.Add(New Country.Create("Saudi Arabia", 1.6, 22023506, 3.28, 1960582, 0, 4350));

	    countries.Add(New Country.Create("Sudan", 3, 35079814, 2.84, 2376000, 129810, 19460));

	    countries.Add(New Country.Create("United States", 4.1, 275562673, 0.91, 9158960, 470131, 207000));

	    normalizedCountry := New Country.CreateEmpty;

	    For i := 0 To countries.Count - 1 Do

	        currCountry := countries.Item(i) As Country;

	        normalizedCountry.GDP := Max(normalizedCountry.GDP, currCountry.GDP);

	        normalizedCountry.Population := Max(normalizedCountry.Population, currCountry.Population);

	        normalizedCountry.PopulationGrowthRate := Max(normalizedCountry.PopulationGrowthRate, currCountry.PopulationGrowthRate);

	        normalizedCountry.AreaLand := Max(normalizedCountry.AreaLand, currCountry.AreaLand);

	        normalizedCountry.AreaWater := Max(normalizedCountry.AreaWater, currCountry.AreaWater);

	        normalizedCountry.IrrigatedLand := Max(normalizedCountry.IrrigatedLand, currCountry.IrrigatedLand);

	    End For;

	    normalizedCountries := New ArrayList.Create;

	    For i := 0 To countries.Count - 1 Do

	        currCountry := countries.Item(i) As Country;

	        normalizedCountries.Add(New Country.Create(currCountry.Name, currCountry.GDP / normalizedCountry.GDP, currCountry.Population / normalizedCountry.Population,

	            currCountry.PopulationGrowthRate / normalizedCountry.PopulationGrowthRate, currCountry.AreaLand / normalizedCountry.AreaLand,

	            currCountry.AreaWater / normalizedCountry.AreaWater, currCountry.IrrigatedLand / normalizedCountry.IrrigatedLand));

	    End For;


	// Создаем нейронную сеть

	    network := New NeuralNetwork.Create;

	// Инициализируем сеть

	    NetworkInitialize(network);

	// Обучаем сеть

	    For epoch := 1 To 300 Do

	        For i := 0 To normalizedCountries.Count - 1 Do

	            currCountry := normalizedCountries.Item(i) As Country;

	            inputs[0] := currCountry.GDP;

	            inputs[1] := currCountry.Population;

	            inputs[2] := currCountry.PopulationGrowthRate;

	            inputs[3] := currCountry.AreaLand;

	            inputs[4] := currCountry.AreaWater;

	            inputs[5] := currCountry.IrrigatedLand;

	            alfa := epoch / 100;

	            network.SetInputValuesConvex(inputs, alfa);

	            learnRate := 0.6 * ((300 - epoch) / 300);

	            learnRadius := (3 * ((300 - epoch) / 350)) As Integer;

	            network.SetLearnRadius(learnRadius);

	            network.SetLearnRate(learnRate);

	            network.PropagateSOFM;

	            network.LearnSOFM;

	        End For;

	    End For;


	// Тестируем входные значения

	    For i := 0 To normalizedCountries.Count - 1 Do

	        currCountry := normalizedCountries.Item(i) As Country;

	        inputs[0] := currCountry.GDP;

	        inputs[1] := currCountry.Population;

	        inputs[2] := currCountry.PopulationGrowthRate;

	        inputs[3] := currCountry.AreaLand;

	        inputs[4] := currCountry.AreaWater;

	        inputs[5] := currCountry.IrrigatedLand;

	        alfa := 1;

	        network.SetInputValuesConvex(inputs, alfa);

	        network.PropagateSOFM;

	        sampleClass := network.GetClosestNeuron;

	        Debug.WriteLine(CurrCountry.Name + ". Класс: " + sampleClass.ToString);

	    End For;

	// Уничтожаем сеть

	    network.DeleteNetwork;

	End Sub Main;


После выполнения примера каждая страна, данные которой тестируются,
 будет отнесена к одному из трех классов. Результаты будут выведены в окно
 консоли.


См. также:


[Примеры](KeNN_Samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
