# IMsMetaModelVisualController.RemoveModel

IMsMetaModelVisualController.RemoveModel
-


# IMsMetaModelVisualController.RemoveModel


## Синтаксис


RemoveModel(ModelKey: Integer): Boolean;


## Параметры


ModelKey. Ключ внутренней модели.


## Описание


Метод RemoveModel удаляет указанную внутреннюю модель.


## Комментарии


Если модель удалена успешно, то метод возвращает значение True.


## Пример


Пример является процедурой, выполняющей удаление внутренней модели. Входные параметры процедуры:


-
MetaVisual. Параметры визуального построения метамодели, содержащей внутреннюю модель;


-
Model. Внутренняя модель.


Добавьте ссылки на системную сборку «Ms».


			Sub UserProcRemove(Var MetaVisual: IMsMetaModelVisualController; Var Model: IMsModel);

Var

    i: Integer;

Begin

    //Удаляем модель
    MetaVisual.RemoveModel((Model As IMetabaseObject).Key);

End Sub UserProcRemove;


После выполнения процедуры будет удалена указанная внутренняя модель.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
