# IModelBoxEditObjectEventArgs.Object

IModelBoxEditObjectEventArgs.Object
-


# IModelBoxEditObjectEventArgs.Object


## Синтаксис


Object: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Object
 возвращает описание редактируемой модели как объекта репозитория.


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 расположенными на ней:


	- двумя компонентами ModelBox с идентификаторами ModelBox1
	 и ModelBox2;


	- двумя компонентами UiModel с идентификаторами UiModel1
	 и UiModel2. Компонент UiModel1 является источником данных для ModelBox1, а UiModel2 - для ModelBox2.


Добавьте ссылку на системные сборки: Ms, Ui.


Пример является обработчиком события OnEditObject
 для компонента ModelBox1 и будет выполняться при нажатии
 кнопки «Редактировать» или при
 двойном щелчке мыши по уравнению в панели «Параметры»
 данного компонента.


			Sub ModelBox1OnEditObject(Sender: Object; Args: IModelBoxEditObjectEventArgs);

Begin

    UiModel2.Object := Args.Object;

    UiModel2.Active := True;

End Sub ModelBox1OnEditObject;


В результате выполнения примера редактируемая модель будет открыта в
 компоненте ModelBox2.


См. также:


[IModelBoxEditObjectEventArgs](IModelBoxEditObjectEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
