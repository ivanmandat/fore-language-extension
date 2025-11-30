# FontBox.setControlsGroupVisibility

FontBox.setControlsGroupVisibility
-


# FontBox.setControlsGroupVisibility


## Синтаксис


setControlsGroupVisibility (value: Boolean, groupName: PP.Ui.FontBox.ControlsGroups)


## Параметры


groupName. Имя группы компонентов, для которых будет определяться видимость;


value. Состояние видимости: true -группа отображается, false - группа не отображается.


## Описание


Метод setControlsGroupVisibility определяет видимость определенной группы элементов управления в компоненте FontBox.


## Пример


Для выполнения примера предполагается наличие на странице компонента FontBox с наименованием «textSettings» (см. «[Конструктор FontBox](Constructor_FontBox.htm)»). Добавим кнопку, при нажатии на которую будет скрыт список для выбора цвета:


var but = new PP.Ui.Button(


{


   ParentNode: document.getElementById("but1"),


   Content: "Hide color",


   Click: function (sender, args)


   {


      textSettings.setControlsGroupVisibility(false, PP.Ui.FontBox.ControlsGroups.FontColor)


   }


})


После выполнения примера при нажатии на кнопку «Hide color» будет скрыт раскрывающийся список для выбора цвета.


См. также:


[FontBox](FontBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
