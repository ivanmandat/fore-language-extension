# IMsMetaModelVisualController.CreateSimpleModel

IMsMetaModelVisualController.CreateSimpleModel
-


# IMsMetaModelVisualController.CreateSimpleModel


## Синтаксис


CreateSimpleModel(InputEntryKey: Integer;

                  InputEntryKeys:
 Array;

                  OutputEntryKey:
 Integer;

                  Kind:
 [MsFormulaKind](../../Enums/MsFormulaKind.htm);

                  GraphMeta:
 String;

                  Var
 InterVariableKey: Integer;

                  Var
 InterModelKey: Integer;

                  [ParentKey:
 Integer = -1;]

                  [InterParentKey:
 Integer = -1;]

                  [UseR:
 Boolean = False]): [IMsModel](../IMsModel/IMsModel.htm);


## Параметры


InputEntryKey. Ключ исходной
 переменной;


InputEntryKeys. Массив
 ключей факторов;


OutputEntryKey. Ключ моделируемой
 переменной;


Kind. Тип модели;


GraphMeta. Графический контекст;


InterVariableKey. Ключ промежуточной
 переменной;


InterModelKey. Ключ промежуточной
 модели интерполяции/коллапса;


ParentKey. Ключ родительского
 элемента;


InterParentKey. Ключ родителя
 промежуточной переменной и промежуточной модели интерполяции/коллапса;


UseR. Определяет, используется
 ли R для расчета модели.


## Описание


Метод CreateSimpleModel создает
 внутреннюю модель.


## Комментарии


Параметр GraphMeta может принимать
 значение Null.


Значения параметров InterVariableKey
 и InterModelKey возвращаются
 методом после выполнения, если динамики моделируемой переменной и факторов
 отличаются.


Если параметр ParentKey имеет
 значение -1, то внутренняя модель создаётся в корне метамодели.


Если параметр InterParentKey имеет
 значение -1, то промежуточная модель и переменная создаются в корне метамодели.


Допустимые значения параметра UseR:


	- True. Для расчета модели
	 используется R;


	- False. Значение по умолчанию.
	 Для расчета модели используется «Форсайт. Аналитическая платформа».


## Пример


Использование метода приведено в примере для [IMsMetaModelVisualController.HasVariableRubricator](IMsMetaModelVisualController.HasVariableRubricator.htm).


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
