# SetDashboardSlides: Операция

SetDashboardSlides: Операция
-


**


# SetDashboardSlides


## Синтаксис


bool SetDashboardSlides(string mon, DashboardSlides
 tArg)


## Параметры


mon. Моникёр
 для работы со слайдами информационной панели.


tArg. Настройки слайдов, которые
 необходимо применить.


## Описание


Операция SetDashboardSlides
 изменяет настройки слайдов информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Slides», а в поле tArg
 настройки слайдов, которые необходимо применить. Моникёр может быть получен
 при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения заголовка у слайда информационной панели.
 В запросе передаётся моникёр для работы со слайдами, ключ слайда, текст
 и настройки заголовка. В ответе возвращается признак успешного изменения
 настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDashboardSlides xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <title>Исходные данные</title>[![](../../minus.gif)](../../#)<gxTitle>
[![](../../minus.gif)](../../#)<font>
  <family>Arial</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>0</width>  <height>20</height>  <units>Mm</units>  </size>
  </font>
  <textColor>#0E50B0</textColor>  <backgroundColor>#FFFFFF</backgroundColor>  <textAlignment>Center</textAlignment>  <verticalTextAlignment>Center</verticalTextAlignment>  <visible>true</visible>  </gxTitle>
  </it>
  </its>
  <activeIndex>2147483647</activeIndex>  <canUsePublication>false</canUsePublication>  </tArg>
  </SetDashboardSlides>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDashboardSlidesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDashboardSlidesResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDashboardSlides" :
  {
   "mon" : "NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "1",
           "title" : "Исходные данные",
           "gxTitle" :
            {
             "font" :
              {
               "family" : "Arial",
               "style" :
                {
                 "it" : "Regular"
                },
               "size" :
                {
                 "width" : "0",
                 "height" : "20",
                 "units" : "Mm"
                }
              },
             "textColor" : "#0E50B0",
             "backgroundColor" : "#FFFFFF",
             "textAlignment" : "Center",
             "verticalTextAlignment" : "Center",
             "visible" : "true"
            }
          }
        ]
      },
     "activeIndex" : "2147483647",
     "canUsePublication" : "false"
    }
  }
}

### JSON-ответ:


{
 "SetDashboardSlidesResult" : "1"
}


public static bool SetDashboardSlides(string moniker, uint slideKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDashboardSlides()
    {
        tArg = new DashboardSlides()
        {
            activeIndex = int.MaxValue,
            canUsePublication = new bool(),
            its = new DashboardSlide[]
            {
                new DashboardSlide()
                {
                    k = slideKey,
                    title = "Исходные данные",
                    gxTitle = new GxTitle()
                    {
                        backgroundColor = "#FFFFFF",
                        font = new GxFont()
                        {
                            family = "Arial",
                            size = new SizeU() { height = 20 },
                            style = new GxFontStylePart[] { GxFontStylePart.Regular }
                        },
                        textAlignment = GxStringAlignment.Center,
                        verticalTextAlignment = GxVerticalAlignment.Center,
                        textColor = "#0E50B0",
                        visible = true
                    }
                }
            }
        },
        // Моникёр для работы со слайдами информационной панели
        mon = moniker + "!Slides"
    };
    // Изменение настроек слайда
    var result = somClient.SetDashboardSlides(tSet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
