# IStandardCubeCalculatedFactBinding.IncludeInSelection

IStandardCubeCalculatedFactBinding.IncludeInSelection
-


# IStandardCubeCalculatedFactBinding.IncludeInSelection


## Синтаксис


		IncludeInSelection: Boolean;


## Описание


Свойство IncludeInSelection
 определяет, будет ли вычисляемый факт включаться в отметку при вычислении
 куба.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом, если вычисляемый факт не отмечен, то значения по нему не будут
 рассчитываться при расчёте куба.


Если свойству установить значение True,
 то при расчёте куба вычисляемый факт всегда будет добавляться в отметки
 и по нему будет производиться расчёт значений.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «STD_CUBE», в кубе создан как минимум один вычисляемый факт.


Добавьте
 ссылки на системные сборки:


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Cube: ICubeModel;

		    CubeDest: IStandardCubeDestination;

		    CB: IStandardCubeCalculatedFactBinding;

		Begin

		    //Открываем куб для редактирования

		    MB := MetabaseClass.Active;

		    Cube := MB.ItemById("STD_CUBE").Edit As ICubeModel;

		    CubeDest := Cube.Destinations.DefaultDestination As IStandardCubeDestination;

		    //Получаем привязку вычисляемого факта

		    CB := CubeDest.CalcBindings.Binding(1) As IStandardCubeCalculatedFactBinding;

		    //Устанавливаем флаг

		    CB.IncludeInSelection := True;

		    //Сохраняем

		    (Cube As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для вычисляемого факта будет установлен
 признак включения его в отметку при расчёте куба.


См. также:


[IStandardCubeCalculatedFactBinding](IStandardCubeCalculatedFactBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
