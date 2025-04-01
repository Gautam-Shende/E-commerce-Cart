import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { FaGoogle, FaGithub, FaFacebook, FaApple } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";

const AuthPage = ({ LoginPopup, setLoginPopup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClose = () => {
    setLoginPopup(false);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  const socialIcons = [
    { icon: FaFacebook, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: FaGoogle, color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/30' },
    { icon: FaApple, color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-200 dark:bg-gray-700' },
    { icon: FaGithub, color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-300 dark:bg-gray-700' }
  ];

  return (
    <AnimatePresence>
      {LoginPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 dark:bg-black/70"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md mx-4 overflow-y-auto max-h-[95vh]"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE 10+ */
            }}
          >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <style jsx>{`
              .relative::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl" />
            
            <div className="relative z-10 p-6 sm:p-8">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <IoCloseOutline className="text-2xl" />
              </button>

              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                className="mb-6 text-center"
              >
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {isLogin ? 'Sign in to your account' : 'Join our community'}
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 mb-3">
                        <MdPerson className="text-gray-500 dark:text-gray-400 mr-2" size={18} />
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full bg-transparent border-none outline-none focus:ring-0 text-sm sm:text-base text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required={!isLogin}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <MdEmail className="text-gray-500 dark:text-gray-400 mr-2" size={18} />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-sm sm:text-base text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="flex items-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <MdLock className="text-gray-500 dark:text-gray-400 mr-2" size={18} />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-sm sm:text-base text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>

                {isLogin && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold text-sm sm:text-base shadow-md transition-all"
                >
                  {isLogin ? 'Sign In' : 'Sign Up'}
                </motion.button>
              </form>

              <div className="mt-6">
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-white dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {socialIcons.map((social, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center p-3 ${social.bg} rounded-lg ${social.color} border border-gray-200 dark:border-gray-600`}
                    >
                      <social.icon size={16} className="sm:size-5" />
                      <span className="ml-2 text-xs sm:text-sm font-medium">
                        {social.icon === FaFacebook && 'Facebook'}
                        {social.icon === FaGoogle && 'Google'}
                        {social.icon === FaApple && 'Apple'}
                        {social.icon === FaGithub && 'GitHub'}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={toggleAuthMode}
                  className="ml-2 font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthPage;