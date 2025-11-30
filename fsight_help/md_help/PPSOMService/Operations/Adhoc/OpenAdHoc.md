# OpenAdHoc: Операция

OpenAdHoc: Операция
-


**


# OpenAdHoc


## Синтаксис


OpenAdHocResult OpenAdHoc(OdId tObject, AdHocOpenArg
 tOpenArg)


## Параметры


tObject. Моникёр объекта, являющегося
 аналитической панелью.


tOpenArg.
 Параметры открытия аналитической панели.


## Описание


Операция OpenAdHoc открывает
 аналитическую панель и возвращает контекст для работы с её содержимым.


## Комментарии


Операция позволяет получить доступ к данным и метаданным аналитической
 панели. Для выполнения операции необходимо в поле tObject
 указать моникёр аналитической панели, а в поле tOpenArg
 параметры открытия. Моникёр может быть получен при выполнении операции
 [GetObjects](../Repository/GetObjects.htm).
 В параметрах открытия tOpenArg
 можно определить режим открытия (tOpenArg.openForEdit),
 указать шаблон для извлечения данных и метаданных (tOpenArg.getMd),
 а также передать значения параметров, которые будут использованы для открытия
 параметрических объектов, используемых в аналитической панели. Результатом
 выполнения операции будет моникёр открытого экземпляра аналитической панели
 и метаданные, если было определено поле tOpenArg.getMd.
 Дальнейшая работа с аналитической панелью осуществляется с помощью операций
 [GetAdHoc](GetAdHoc.htm), [SetAdHoc](SetAdHoc.htm). Для закрытия экземпляра аналитической
 панели и освобождения ресурсов используйте операцию [CloseAdHoc](CloseAdHoc.htm).


## Пример


Пример открытия аналитической панели на редактирование. В запросе передается
 моникёр аналитической панели и шаблон для извлечения общих метаданных.
 В ответе приходит моникёр открытого экземпляра аналитической панели и
 запрошенные метаданные.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<OpenAdHoc
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../minus.gif)](../../#)<tObject xmlns="** **">


						  <id>S1!M!87502</id>


					  </tObject>


					[![](../../minus.gif)](../../#)<tOpenArg xmlns="** **">


						  <openForEdit>true</openForEdit>


						[![](../../minus.gif)](../../#)<getMd>


							  <obInst>true</obInst>


							  <md>true</md>


						  </getMd>


					  </tOpenArg>


				  </OpenAdHoc>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				[![](../../minus.gif)](../../#)<OpenAdHocResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../minus.gif)](../../#)<id xmlns="** **">


						  <id>S1!M!S!AdHoc1</id>


					  </id>


					[![](../../minus.gif)](../../#)<meta xmlns="** **">


						[![](../../minus.gif)](../../#)<obInst>


							[![](../../minus.gif)](../../#)<obDesc isShortcut="**0**"
							 isLink="**0**" fullUrl="**/**"
							 ver="**1**" hf="**0**">


								  <i>ADHOC_SAMPLE</i>


								  <n>Аналитическая
								 панель</n>


								  <k>87502</k>


								  <c>8448</c>


								  <p>6714</p>


								  <h>0</h>


								  <hasPrv>0</hasPrv>


								  <ic>0</ic>


								  <isPermanent>1</isPermanent>


								  <isTemp>0</isTemp>


							  </obDesc>


						  </obInst>


						  <dirty>0</dirty>


						[![](../../minus.gif)](../../#)<Md>


							[![](../../minus.gif)](../../#)<kap version="**8.0**">


								[![](../../minus.gif)](../../#)<block type="**Dashboard**" key="**SVXNUNJURC6H2FA9**">


								  <prop
								 isArrFlg="**1**" tag="**name**" val="**Аналитическая
								 панель**" />


									[![](../../minus.gif)](../../#)<prop
									 tag="**background**">


									  <prop
									 isArrFlg="**1**" tag="**backgroundColor**" val="**#ffffff**"
									 />


									  <prop
									 tag="**gradientColor**" val="**#c9c9c9**"
									 />


									  <prop
									 tag="**gradientAngle**" val="**270**"
									 />


									  </prop>


									[![](../../minus.gif)](../../#)<prop
									 tag="**decor**">


										[![](../../minus.gif)](../../#)<prop
										 tag="**paddings**">


										  <prop
										 isArrFlg="**1**" tag="**usePaddings**" val="**1**"
										 />


										  <prop
										 tag="**left**" val="**10**"
										 />


										  <prop
										 tag="**right**" val="**10**"
										 />


										  <prop
										 tag="**top**" val="**10**"
										 />


										  <prop
										 tag="**bottom**" val="**10**"
										 />


										  </prop>


									  </prop>


								  <prop
								 tag="**autoLayout**" val="**1**"
								 />


									[![](../../minus.gif)](../../#)<prop
									 tag="**pageLayout**">


									  <prop
									 tag="**sizeMode**" val="**stretch**"
									 />


									  </prop>


								  </block>


							  </kap>


						  </Md>


						  <autoUpdateSources>1</autoUpdateSources>


						  <calcOnChangedData>2</calcOnChangedData>


					  </meta>


				  </OpenAdHocResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "OpenAdHoc" :
  {
   "tObject" :
    {
     "id" : "S1!M!87502"
    },
   "tOpenArg" :
    {
     "openForEdit" : "true",
     "getMd" :
      {
       "obInst" : "true",
       "md" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenAdHocResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!AdHoc1"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@fullUrl" : "\/",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "1",
         "@hf" : "0",
         "i" : "ADHOC_SAMPLE",
         "n" : "Аналитическая панель",
         "k" : "87502",
         "c" : "8448",
         "p" : "6714",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "Md" :
      {
       "kap" :
        {
         "@version" : "8.0",
         "block" :
          {
           "@type" : "Dashboard",
           "@key" : "SVXNUNJURC6H2FA9",
           "prop" :
            [
              {
               "@val" : "Аналитическая панель",
               "@isArrFlg" : "1",
               "@tag" : "name"
              },
              {
               "@tag" : "background",
               "prop" :
                [
                  {
                   "@val" : "#ffffff",
                   "@isArrFlg" : "1",
                   "@tag" : "backgroundColor"
                  },
                  {
                   "@val" : "#c9c9c9",
                   "@tag" : "gradientColor"
                  },
                  {
                   "@val" : "270",
                   "@tag" : "gradientAngle"
                  }
                ]
              },
              {
               "@tag" : "decor",
               "prop" :
                {
                 "@tag" : "paddings",
                 "prop" :
                  [
                    {
                     "@val" : "1",
                     "@isArrFlg" : "1",
                     "@tag" : "usePaddings"
                    },
                    {
                     "@val" : "10",
                     "@tag" : "left"
                    },
                    {
                     "@val" : "10",
                     "@tag" : "right"
                    },
                    {
                     "@val" : "10",
                     "@tag" : "top"
                    },
                    {
                     "@val" : "10",
                     "@tag" : "bottom"
                    }
                  ]
                }
              },
              {
               "@val" : "1",
               "@tag" : "autoLayout"
              },
              {
               "@tag" : "pageLayout",
               "prop" :
                {
                 "@val" : "stretch",
                 "@tag" : "sizeMode"
                }
              }
            ]
          }
        }
      },
     "autoUpdateSources" : "1",
     "calcOnChangedData" : "2"
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


	Указанная ниже функция OpenAdhoc
	 открывает аналитическую панель. Моникёр соединения с репозиторием
	 и идентификатор аналитической панели передаются в качестве входных
	 параметров. В примере используется функция FindObjectById,
	 код которой приведен в примере «[Получение
	 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)». Результат выполнения
	 операции является результатом выполнения функции.


public static OpenAdHocResult OpenAdhoc(MbId mb, string adhocId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenAdHoc()
    {
        tOpenArg = new AdHocOpenArg()
        {
            openForEdit = true,
            getMd = new AdHocMdPattern()
            {
                md = true
            }
        },
        //Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, adhocId).k }
    };
    //Открытие аналитической панели
    var result = somClient.OpenAdHoc(tOpen);
    return result;
}


См. также:


[Работа
 с аналитической панелью](Adhoc_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
