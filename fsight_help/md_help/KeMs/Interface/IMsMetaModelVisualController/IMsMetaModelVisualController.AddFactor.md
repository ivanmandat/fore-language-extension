# IMsMetaModelVisualController.AddFactor

IMsMetaModelVisualController.AddFactor
-


# IMsMetaModelVisualController.AddFactor


## Синтаксис


AddFactor(Model: [IMsModel](../IMsModel/IMsModel.htm);

          EntryKey: Integer;

          GraphMeta:
 String;

          Var InterVariableKey:
 Integer;

          Var InterModelKey:
 Integer;

          Index: Integer;

          [InterParentKey:
 Integer = -1]): Boolean;


## Параметры


Model. Внутренняя модель;


EntryKey. Ключ добавляемого
 фактора;


GraphMeta. Графический контекст;


InterVariableKey. Ключ промежуточной
 переменной;


InterModelKey. Ключ промежуточной
 модели интерполяции/коллапса;


Index. Параметр, определяющий
 добавлять ли в модель новый фактор или копировать существующий;


InterParentKey. Ключ родителя
 промежуточной переменной и промежуточной модели интерполяции/коллапса.


## Описание


Метод AddFactor добавляет
 фактор во внутреннюю модель.


## Комментарии


Параметр GraphMeta может принимать
 значение Null.


Значения параметров InterVariableKey
 и InterModelKey возвращаются
 методом после выполнения, если динамики модели и добавляемого фактора
 отличаются.


Для добавления нового фактора в модель параметр Index
 должен принимать значение «-1». Для копирования существующего фактора
 укажите его индекс в параметре Index.


Если параметр InterParentKey
 имеет значение -1, то промежуточные переменная и модель добавляются в
 корень метамодели.


## Пример


Использование метода приведено в примере для [IMsMetaModelVisualController.HasVariableRubricator](IMsMetaModelVisualController.HasVariableRubricator.htm).


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
