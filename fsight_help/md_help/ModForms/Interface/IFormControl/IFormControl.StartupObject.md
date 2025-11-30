# IFormControl.StartupObject

IFormControl.StartupObject
-


# IFormControl.StartupObject


## Синтаксис


StartupObject: IUnknownAgg;


## Описание


Свойство StartupObject возвращает
 описание запущенного объекта напрямую от объекта.


## Комментарии


IUnknownAgg является абстрактным
 интерфейсом и может быть приведен к [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm).


## Пример


Для использования примера на форме предполагается наличие компонента
 Button с идентификатором «Button1», а также наличие данной формы в репозитории
 и ярлыка к ней.


Добавьте ссылки на системные сборки: Forms и Metabase.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    MBD: IMetabaseObjectDescriptor;

Begin

    //Получаем данные формы

    MBD := Self.StartupObject As IMetabaseObjectDescriptor;

    //Выводим сообщение в консоль

    Debug.Write(MBD.IsShortcut.ToString);

End Sub Button1OnClick;


В результате выполнения примера после нажатия
 кнопки в консоли будет выведен признак того, была ли запущена форма через
 ярлык.


См. также:


[IFormControl](IFormControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
