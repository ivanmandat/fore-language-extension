# IRubricatorInstanceList.FindByKey

IRubricatorInstanceList.FindByKey
-


# IRubricatorInstanceList.FindByKey


## Синтаксис


FindByKey(RubricatorKey: Integer): [IRubricatorInstance](../IRubricatorInstance/IRubricatorInstance.htm);


## Описание


Метод FindByKey возвращает базу
 из коллекции по её ключу.


## Комментарии


Если база данных временных рядов с заданным ключом отсутствует в коллекции,
 то метод возвращает значение Null.


## Пример


Для выполнения примера предполагается наличие формы, на которой расположены
 компонент LanerBox и компонент UiErAnalyzer с идентификатором «UiErAnalyzer1»,
 являющегося источником данных для LanerBox. В «UiErAnalyzer1» должна быть
 загружена рабочая книга базы данных временных рядов в рядном режиме.


Добавьте ссылки на системные сборки «Cubes» и «Metabase».


			Sub FindRub;

Var

    Laner: ILaner;

    RubList: IRubricatorInstanceList;

    mb: IMetabase;

    key: Integer;

    RubrInst: IRubricatorInstance;

Begin

    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

    RubList := Laner.UsedRubricators;

    mb := MetabaseClass.Active;

    key := mb.GetObjectKeyById("FC_COMM");

    RubrInst := RubList.FindByKey(key);

    If RubrInst <> Null Then

            Debug.WriteLine("Является источником данных");

        Else

            Debug.WriteLine("Не является источником данных");

    End If;

End Sub FindRub;


После выполнения примера будет определено: является ли база данных временных
 рядов с идентификатором «FC_COMM» источником данных для рядов в загруженной
 рабочей книге. Результат будет выведен в окно консоли.


См. также:


[IRubricatorInstanceList](IRubricatorInstanceList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
