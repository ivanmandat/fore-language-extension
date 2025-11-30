# IMsMetaModelVisualController.AddInputVariable

IMsMetaModelVisualController.AddInputVariable
-


# IMsMetaModelVisualController.AddInputVariable


## Синтаксис


AddInputVariable(Model: IMsModel;

                 EntryKey:
 Integer;

                 GraphMeta:
 String;

                 Var
 InterVariableKey: Integer;

                 Var
 InterModelKey: Integer;

                 [InterParentKey:
 Integer = -1]): Boolean;


## Параметры


Model. Модель;


EntryKey. Ключ переменной,
 которая будет добавлена в модель в качестве исходной;


GraphMeta. Графический контекст;


InterVariableKey. Ключ промежуточной
 переменной;


InterModelKey. Ключ промежуточной
 модели интерполяции/коллапса;


InterParentKey. Ключ промежуточного
 родительского элемента.


## Описание


Метод AddInputVariable
 изменяет исходную переменную модели.


## Комментарии


По умолчанию исходная переменная совпадает с моделируемой переменной.


Если исходная переменная успешно изменена, то метод возвращает значение
 True, иначе - False.


## Пример


Для выполнения примера в репозитории должны присутствовать:


	- БД временных рядов с идентификатором «TSDB», содержащая временной
	 ряд с ключом «12»;


	- Контейнер моделирования с идентификатором «MS», содержащий задачу
	 моделирования с идентификатором «ADDINPUTVARIABLE». Цепочка расчета
	 данной задачи должна содержать модель.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    RubObj: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ChainEn: IMsCalculationChainEntries;

    i: Integer;

    Model: IMsModel;

    VarEx, InpResult: Boolean;

    VarInp: IMsCalculationChainVariable;

    InVarKey, InModelKey: Integer;

Begin

    mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubObj := mb.ItemById("TSDB");

    // Получаем задачу моделирования и её метамодель

    Problem := mb.ItemByIdNamespace("ADDINPUTVARIABLE", mb.ItemById("MS").Key).Edit As IMsProblem;

    Meta := Problem.MetaModel;

    // Получаем модель из цепочки расчета

    ChainEn := Meta.CalculationChain;

    For i := 0 To ChainEn.Count - 1 Do

        If ChainEn.Item(i).Type = MsCalculationChainEntryType.Model Then

            Model := (ChainEn.Item(i) As IMsCalculationChainModel).Model;

        End If;

    End For;

    MetaVisual := Meta.VisualController;

    // Получаем ключ входной переменной

    VarInp := MetaVisual.GetVariableByFactor(RubObj.Key, 12, "", VarEx);

    // Задаем исходную переменную

    InpResult := MetaVisual.AddInputVariable(Model, VarInp.Key, "", InVarKey, InModelKey, -1);

    // Выводим результат в окно консоли

    Debug.WriteLine("Добавление исходной переменной прошло успешно: " + InpResult.ToString);

    // Сохраняем задачу моделирования

    (Problem As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для первой модели в цепочке расчета
 задачи «ADDINPUTVARIABLE» будет изменена исходная переменная. Будет использована
 переменная, созданная на временном ряде из базы данных временных рядов.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
