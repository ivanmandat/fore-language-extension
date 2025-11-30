# IRubricatorFactorStorage.EphemeralFacts

IRubricatorFactorStorage.EphemeralFacts
-


# IRubricatorFactorStorage.EphemeralFacts


## Синтаксис


EphemeralFacts: Boolean;


## Описание


Свойство EphemeralFacts определяет,
 сохранять ли новые показатели с признаком удаленности.


## Комментарии


EphemeralFacts может использоваться
 для сохранения данных расчёта валидации, если она была рассчитана для
 несуществующих, но возможных показателей.


Допустимые значения:


	- True. Новые показатели
	 создаются с признаком удалённости. Требуется указать значение
	 свойства [IRubricatorFactorStorage.CurrentRevision](IRubricatorFactorStorage.CurrentRevision.htm);


	- False. Значение по умолчанию.
	 Новые показатели создаются без признака удалённости.


## Пример


Для выполнения примера предполагается наличие объекта «FactorStorage»
 (типа [IRubricatorFactorStorage](IRubricatorFactorStorage.htm)),
 предназначенного для сохранения данных показателей. Входные параметры
 процедуры:


	- Mat. Матрица с результатами
	 расчета валидации;


	- Rev. Ревизия, на которую
	 должны сохраняться данные.


Добавьте ссылки на системные сборки: Cubes, Matrix.


	Sub UserProc(Mat: IMatrix; Rev: IRubricatorRevision);

	Var

	    FactorStorage: IRubricatorFactorStorage;

	    Storage: ICubeInstanceStorage;

	Begin

	    FactorStorage.CurrentRevision := Rev;

	    FactorStorage.FactDataMatrix := Mat;

	    FactorStorage.ValidationValues := True;

	    FactorStorage.EphemeralFacts := True;

	    Storage := FactorStorage.AsCubeStorage;

	    Storage.SaveMatrix(Mat, 1);

	End Sub UserProc;


После выполнения примера данные расчета валидации будут сохранены, новые
 показатели будут созданы с признаком удаленности.


См. также:


[IRubricatorFactorStorage](IRubricatorFactorStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
