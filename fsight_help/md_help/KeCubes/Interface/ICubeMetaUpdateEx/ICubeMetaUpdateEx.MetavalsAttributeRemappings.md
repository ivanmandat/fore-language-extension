# ICubeMetaUpdateEx.MetavalsAttributeRemappings

ICubeMetaUpdateEx.MetavalsAttributeRemappings
-


# ICubeMetaUpdateEx.MetavalsAttributeRemappings


## Синтаксис


MetavalsAttributeRemappings: [ICubeMetaUpdateAttributeRemappings](../ICubeMetaUpdateAttributeRemappings/ICubeMetaUpdateAttributeRemappings.htm);


## Описание


Свойство MetavalsAttributeRemappings
 определяет коллекцию соответствий атрибутов наблюдений копируемой базы
 и атрибутов наблюдений базы-копии.


## Комментарии


Способ определения значения атрибута наблюдения базы-копии определяет
 свойство [ICubeMetaUpdateAttributeRemapping.Type](../ICubeMetaUpdateAttributeRemapping/ICubeMetaUpdateAttributeRemapping.Type.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC_SOURCE», содержащего строковый пользовательский
 атрибут наблюдения «COMMENT». Также должна присутствовать база данных
 временных рядов с идентификатором «FC_TARGET», содержащая строковый пользовательский
 атрибут наблюдения «NOTE». Данные базы не содержат пользовательские атрибуты
 показателей.


Добавьте ссылки на системные сборки «Metabase», «Cubes».


			Sub UserProc;

Var

    mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    RubSource: IRubricator;

    AttrR: ICubeMetaUpdateAttributeRemapping;

Begin

    mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    RubSource := mb.ItemById("FC_SOURCE").Bind As IRubricator;

    RubUpdateEx.Rubricator := RubSource;

    RubUpdateEx.CopyData := True;

    RubUpdateEx.CopyExtraObjects := False;

    RubUpdateEx.Metabase := mb;

    RubUpdateEx.TargetRubricator := mb.ItemById("FC_TARGET").Bind As IRubricator;

    AttrR := RubUpdateEx.MetavalsAttributeRemappings.FindById("NOTE");

    AttrR.Source := "COMMENT";

    AttrR.Type := CubeMetaUpdateAttributeRemappingType.ValueSource;

    RubUpdateEx.Apply(Null);

End Sub UserProc;


После выполнения примера будет задано соответствие между атрибутами
 «COMMENT» и «NOTE»: при копировании данных из базы «FC_SOURCE» в базу
 «FC_TARGET» данные атрибута «COMMENT» будут скопированы в атрибут NOTE».


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
