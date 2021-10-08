﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Rental_service
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Rent.
    /// </summary>
    //  *** Start programmer edit section *** (Rent CustomAttributes)

    //  *** End programmer edit section *** (Rent CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("RentE", new string[] {
            "StartRent as \'Start rent\'",
            "EndRent as \'End rent\'",
            "duration as \'Duration\'",
            "cost as \'Cost\'",
            "GetAt as \'Get at\'",
            "GetAt.Address as \'Address\'",
            "LeftAt as \'Left at\'",
            "LeftAt.Address as \'Address\'",
            "RentBike as \'Rent bike\'",
            "RentBike.Name as \'Name\'"}, Hidden=new string[] {
            "GetAt.Address",
            "LeftAt.Address",
            "RentBike.Name"})]
    [MasterViewDefineAttribute("RentE", "GetAt", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Address")]
    [MasterViewDefineAttribute("RentE", "LeftAt", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Address")]
    [MasterViewDefineAttribute("RentE", "RentBike", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("RentL", new string[] {
            "StartRent as \'Start rent\'",
            "EndRent as \'End rent\'",
            "duration as \'Duration\'",
            "cost as \'Cost\'",
            "GetAt.Address as \'Address\'",
            "LeftAt.Address as \'Address\'",
            "RentBike.Name as \'Name\'"})]
    public class Rent : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fStartRent;
        
        private double fduration;
        
        private System.DateTime fEndRent;
        
        private int fcost;
        
        private IIS.Rental_service.RentPoint fGetAt;
        
        private IIS.Rental_service.RentPoint fLeftAt;
        
        private IIS.Rental_service.Bikes fRentBike;
        
        //  *** Start programmer edit section *** (Rent CustomMembers)

        //  *** End programmer edit section *** (Rent CustomMembers)

        
        /// <summary>
        /// StartRent.
        /// </summary>
        //  *** Start programmer edit section *** (Rent.StartRent CustomAttributes)

        //  *** End programmer edit section *** (Rent.StartRent CustomAttributes)
        public virtual System.DateTime StartRent
        {
            get
            {
                //  *** Start programmer edit section *** (Rent.StartRent Get start)

                //  *** End programmer edit section *** (Rent.StartRent Get start)
                System.DateTime result = this.fStartRent;
                //  *** Start programmer edit section *** (Rent.StartRent Get end)

                //  *** End programmer edit section *** (Rent.StartRent Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Rent.StartRent Set start)

                //  *** End programmer edit section *** (Rent.StartRent Set start)
                this.fStartRent = value;
                //  *** Start programmer edit section *** (Rent.StartRent Set end)

                //  *** End programmer edit section *** (Rent.StartRent Set end)
            }
        }
        
        /// <summary>
        /// duration.
        /// </summary>
        //  *** Start programmer edit section *** (Rent.duration CustomAttributes)

        //  *** End programmer edit section *** (Rent.duration CustomAttributes)
        public virtual double duration
        {
            get
            {
                //  *** Start programmer edit section *** (Rent.duration Get start)

                //  *** End programmer edit section *** (Rent.duration Get start)
                double result = this.fduration;
                //  *** Start programmer edit section *** (Rent.duration Get end)

                //  *** End programmer edit section *** (Rent.duration Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Rent.duration Set start)

                //  *** End programmer edit section *** (Rent.duration Set start)
                this.fduration = value;
                //  *** Start programmer edit section *** (Rent.duration Set end)

                //  *** End programmer edit section *** (Rent.duration Set end)
            }
        }
        
        /// <summary>
        /// EndRent.
        /// </summary>
        //  *** Start programmer edit section *** (Rent.EndRent CustomAttributes)

        //  *** End programmer edit section *** (Rent.EndRent CustomAttributes)
        public virtual System.DateTime EndRent
        {
            get
            {
                //  *** Start programmer edit section *** (Rent.EndRent Get start)

                //  *** End programmer edit section *** (Rent.EndRent Get start)
                System.DateTime result = this.fEndRent;
                //  *** Start programmer edit section *** (Rent.EndRent Get end)

                //  *** End programmer edit section *** (Rent.EndRent Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Rent.EndRent Set start)

                //  *** End programmer edit section *** (Rent.EndRent Set start)
                this.fEndRent = value;
                //  *** Start programmer edit section *** (Rent.EndRent Set end)

                //  *** End programmer edit section *** (Rent.EndRent Set end)
            }
        }
        
        /// <summary>
        /// cost.
        /// </summary>
        //  *** Start programmer edit section *** (Rent.cost CustomAttributes)

        //  *** End programmer edit section *** (Rent.cost CustomAttributes)
        public virtual int cost
        {
            get
            {
                //  *** Start programmer edit section *** (Rent.cost Get start)

                //  *** End programmer edit section *** (Rent.cost Get start)
                int result = this.fcost;
                //  *** Start programmer edit section *** (Rent.cost Get end)

                //  *** End programmer edit section *** (Rent.cost Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Rent.cost Set start)

                //  *** End programmer edit section *** (Rent.cost Set start)
                this.fcost = value;
                //  *** Start programmer edit section *** (Rent.cost Set end)

                //  *** End programmer edit section *** (Rent.cost Set end)
            }
        }
        
        /// <summary>
        /// Rent.
        /// </summary>
        //  *** Start programmer edit section *** (Rent.GetAt CustomAttributes)

        //  *** End programmer edit section *** (Rent.GetAt CustomAttributes)
        [NotNull()]
        public virtual IIS.Rental_service.RentPoint GetAt
        {
            get
            {
                //  *** Start programmer edit section *** (Rent.GetAt Get start)

                //  *** End programmer edit section *** (Rent.GetAt Get start)
                IIS.Rental_service.RentPoint result = this.fGetAt;
                //  *** Start programmer edit section *** (Rent.GetAt Get end)

                //  *** End programmer edit section *** (Rent.GetAt Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Rent.GetAt Set start)

                //  *** End programmer edit section *** (Rent.GetAt Set start)
                this.fGetAt = value;
                //  *** Start programmer edit section *** (Rent.GetAt Set end)

                //  *** End programmer edit section *** (Rent.GetAt Set end)
            }
        }
        
        /// <summary>
        /// Rent.
        /// </summary>
        //  *** Start programmer edit section *** (Rent.LeftAt CustomAttributes)

        //  *** End programmer edit section *** (Rent.LeftAt CustomAttributes)
        [NotNull()]
        public virtual IIS.Rental_service.RentPoint LeftAt
        {
            get
            {
                //  *** Start programmer edit section *** (Rent.LeftAt Get start)

                //  *** End programmer edit section *** (Rent.LeftAt Get start)
                IIS.Rental_service.RentPoint result = this.fLeftAt;
                //  *** Start programmer edit section *** (Rent.LeftAt Get end)

                //  *** End programmer edit section *** (Rent.LeftAt Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Rent.LeftAt Set start)

                //  *** End programmer edit section *** (Rent.LeftAt Set start)
                this.fLeftAt = value;
                //  *** Start programmer edit section *** (Rent.LeftAt Set end)

                //  *** End programmer edit section *** (Rent.LeftAt Set end)
            }
        }
        
        /// <summary>
        /// Rent.
        /// </summary>
        //  *** Start programmer edit section *** (Rent.RentBike CustomAttributes)

        //  *** End programmer edit section *** (Rent.RentBike CustomAttributes)
        [NotNull()]
        public virtual IIS.Rental_service.Bikes RentBike
        {
            get
            {
                //  *** Start programmer edit section *** (Rent.RentBike Get start)

                //  *** End programmer edit section *** (Rent.RentBike Get start)
                IIS.Rental_service.Bikes result = this.fRentBike;
                //  *** Start programmer edit section *** (Rent.RentBike Get end)

                //  *** End programmer edit section *** (Rent.RentBike Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Rent.RentBike Set start)

                //  *** End programmer edit section *** (Rent.RentBike Set start)
                this.fRentBike = value;
                //  *** Start programmer edit section *** (Rent.RentBike Set end)

                //  *** End programmer edit section *** (Rent.RentBike Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "RentE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View RentE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("RentE", typeof(IIS.Rental_service.Rent));
                }
            }
            
            /// <summary>
            /// "RentL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View RentL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("RentL", typeof(IIS.Rental_service.Rent));
                }
            }
        }
    }
}